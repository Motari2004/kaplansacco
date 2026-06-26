import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    // Check if it's form data (with file) or JSON
    const contentType = request.headers.get('content-type') || ''
    
    let formData: any = {}
    let fileUploaded = false
    let idFilePath = null

    if (contentType.includes('multipart/form-data')) {
      // Handle FormData with file
      const data = await request.formData()
      
      formData = {
        firstName: data.get('firstName') as string,
        lastName: data.get('lastName') as string,
        email: data.get('email') as string,
        phone: data.get('phone') as string,
        idNumber: data.get('idNumber') as string,
        password: data.get('password') as string,
        monthlyContribution: parseFloat(data.get('monthlyContribution') as string) || 500,
        physicalAddress: data.get('physicalAddress') as string || '',
        postalAddress: data.get('postalAddress') as string || '',
      }
      
      const idFile = data.get('idFile') as File | null
      
      // Handle ID file upload
      if (idFile && idFile.size > 0) {
        try {
          // Create uploads directory if it doesn't exist
          const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'ids')
          if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true })
          }

          // Generate unique filename
          const timestamp = Date.now()
          const fileExtension = idFile.name.split('.').pop()
          const fileName = `${formData.idNumber}_${timestamp}.${fileExtension}`
          const filePath = path.join(uploadDir, fileName)
          
          // Convert file to buffer and save
          const bytes = await idFile.arrayBuffer()
          const buffer = Buffer.from(bytes)
          await writeFile(filePath, buffer)

          idFilePath = `/uploads/ids/${fileName}`
          fileUploaded = true
          
          console.log(`✅ ID file uploaded: ${fileName}`)
        } catch (fileError) {
          console.error('File upload error:', fileError)
        }
      }
    } else {
      // Handle JSON data (no file)
      formData = await request.json()
    }

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.idNumber || !formData.password) {
      return NextResponse.json(
        { message: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: formData.email },
          { idNumber: formData.idNumber },
        ],
      },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email or ID number already exists' },
        { status: 400 }
      )
    }

    // Generate member number
    const lastMember = await prisma.user.findFirst({
      where: { role: 'MEMBER' },
      orderBy: { memberNumber: 'desc' },
    })

    let memberNumber = 'KAP001'
    if (lastMember) {
      const num = parseInt(lastMember.memberNumber.replace('KAP', ''))
      memberNumber = `KAP${String(num + 1).padStart(3, '0')}`
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(formData.password, 10)

    // Create user with ID document path
    const user = await prisma.user.create({
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        idNumber: formData.idNumber,
        password: hashedPassword,
        memberNumber,
        monthlyContribution: formData.monthlyContribution || 500,
        shares: 0,
        savingsBalance: 0,
        status: 'ACTIVE',
        role: 'MEMBER',
        physicalAddress: formData.physicalAddress || '',
        postalAddress: formData.postalAddress || '',
        idDocument: idFilePath, // Save the file path
      },
    })

    // Create initial transaction for registration fee
    await prisma.transaction.create({
      data: {
        userId: user.id,
        type: 'DEPOSIT',
        amount: 1500,
        description: 'Membership registration fee',
        status: 'COMPLETED',
        receiptNo: `RCP-${Date.now()}`,
      },
    })

    return NextResponse.json(
      { 
        success: true,
        message: 'Member registered successfully',
        memberNumber: user.memberNumber,
        userId: user.id,
        idUploaded: fileUploaded,
        idFilePath: idFilePath,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { 
        success: false,
        message: 'Registration failed. Please try again.' 
      },
      { status: 500 }
    )
  }
}
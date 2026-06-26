import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    const { id } = await params
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { status } = body

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      )
    }

    // Check if loan exists
    const loan = await prisma.loan.findUnique({
      where: { id },
    })

    if (!loan) {
      return NextResponse.json(
        { error: 'Loan not found' },
        { status: 404 }
      )
    }

    // Update loan status
    const updateData: any = { status }
    
    if (status === 'APPROVED') {
      updateData.approvalDate = new Date()
    }
    
    if (status === 'DISBURSED') {
      updateData.disbursementDate = new Date()
    }

    const updatedLoan = await prisma.loan.update({
      where: { id },
      data: updateData,
    })

    // Create transaction record for status change - REMOVED reference field
    await prisma.transaction.create({
      data: {
        userId: loan.userId,
        type: 'LOAN_DISBURSEMENT',
        amount: loan.amount,
        description: `Loan ${status} - ${id.slice(0, 8)}`,
        status: 'COMPLETED',
        // reference: id, // <-- DO NOT INCLUDE THIS - it causes the unique constraint error
        processedBy: session.user.id,
      },
    })

    return NextResponse.json({
      success: true,
      message: `Loan ${status} successfully`,
      loan: updatedLoan,
    })
  } catch (error) {
    console.error('Error updating loan:', error)
    return NextResponse.json(
      { error: 'Failed to update loan' },
      { status: 500 }
    )
  }
}
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// GET - Fetch user contributions (monthly savings deposits only)
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const contributions = await prisma.contribution.findMany({
      where: { userId: session.user.id },
      orderBy: { month: 'desc' },
    })

    // Get user data for monthly contribution amount
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        monthlyContribution: true,
        savingsBalance: true,
      },
    })

    // Calculate months active (unique months with contributions)
    const uniqueMonths = new Set()
    contributions.forEach((c: any) => {
      const monthKey = `${c.month.getFullYear()}-${c.month.getMonth()}`
      uniqueMonths.add(monthKey)
    })

    // Total contributions (monthly savings deposits only)
    const totalSaved = contributions.reduce((sum, c) => sum + c.amount, 0)

    return NextResponse.json({
      contributions,
      totalSaved, // This is only from monthly deposits
      totalContributions: contributions.length,
      monthsActive: uniqueMonths.size,
      nextContribution: user?.monthlyContribution || 500,
    })
  } catch (error) {
    console.error('Error fetching contributions:', error)
    return NextResponse.json(
      { message: 'Failed to fetch contributions' },
      { status: 500 }
    )
  }
}

// POST - Make a contribution (monthly savings deposit)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { amount, month } = body

    if (!amount || amount < 500) {
      return NextResponse.json(
        { message: 'Minimum contribution is Kshs 500' },
        { status: 400 }
      )
    }

    // Check if contribution for this month already exists
    const contributionDate = new Date(month || Date.now())
    const startOfMonth = new Date(contributionDate.getFullYear(), contributionDate.getMonth(), 1)
    const endOfMonth = new Date(contributionDate.getFullYear(), contributionDate.getMonth() + 1, 0)

    const existing = await prisma.contribution.findFirst({
      where: {
        userId: session.user.id,
        month: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    })

    if (existing) {
      return NextResponse.json(
        { message: 'You already made a contribution for this month' },
        { status: 400 }
      )
    }

    // Generate receipt number
    const receiptNo = `CTR-${Date.now()}-${Math.random().toString(36).substring(7)}`

    // Create contribution (monthly savings deposit)
    const contribution = await prisma.contribution.create({
      data: {
        userId: session.user.id,
        month: startOfMonth,
        amount,
        receiptNo,
        status: 'PAID',
        paidDate: new Date(),
      },
    })

    // Update user's savings balance
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        savingsBalance: {
          increment: amount,
        },
      },
    })

    // Create transaction record
    await prisma.transaction.create({
      data: {
        userId: session.user.id,
        type: 'CONTRIBUTION',
        amount,
        description: `Monthly savings deposit - ${startOfMonth.toLocaleDateString('en-KE', { month: 'long', year: 'numeric' })}`,
        status: 'COMPLETED',
        receiptNo,
        processedBy: session.user.id,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Monthly savings deposit recorded successfully',
        contribution,
        receiptNo,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contribution error:', error)
    return NextResponse.json(
      { message: 'Failed to record contribution' },
      { status: 500 }
    )
  }
}
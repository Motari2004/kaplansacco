import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Unwrap params
    const { id } = await params

    // Fetch loan with payments
    const loan = await prisma.loan.findUnique({
      where: { id: id },
      include: {
        payments: {
          orderBy: { paymentDate: 'desc' },
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
            memberNumber: true,
            email: true,
            phone: true,
          },
        },
      },
    })

    if (!loan) {
      return NextResponse.json({ error: 'Loan not found' }, { status: 404 })
    }

    // Check if the loan belongs to the user
    if (loan.userId !== session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.json(loan)
  } catch (error) {
    console.error('Error fetching loan details:', error)
    return NextResponse.json(
      { error: 'Failed to fetch loan details' },
      { status: 500 }
    )
  }
}
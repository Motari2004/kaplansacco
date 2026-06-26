import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const loans = await prisma.loan.findMany({
      where: { userId: session.user.id },
    })

    const totalLoans = loans.length
    const activeLoans = loans.filter((l: any) => l.status === 'APPROVED' || l.status === 'DISBURSED').length
    const pendingLoans = loans.filter((l: any) => l.status === 'PENDING').length
    const totalAmount = loans.reduce((sum: number, l: any) => sum + l.amount, 0)

    // Find next payment (earliest due date among active loans)
    const activeLoansList = loans.filter((l: any) => l.status === 'APPROVED' || l.status === 'DISBURSED')
    let nextPayment = null
    if (activeLoansList.length > 0) {
      const earliestDue = activeLoansList.reduce((earliest: any, current: any) => {
        return new Date(current.dueDate) < new Date(earliest.dueDate) ? current : earliest
      })
      nextPayment = earliestDue.dueDate
    }

    return NextResponse.json({
      totalLoans,
      activeLoans,
      pendingLoans,
      totalAmount,
      nextPayment,
    })
  } catch (error) {
    console.error('Error fetching loan stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch loan stats' },
      { status: 500 }
    )
  }
}
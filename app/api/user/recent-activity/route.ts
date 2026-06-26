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

    const userId = session.user.id

    // Get recent transactions
    const transactions = await prisma.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })

    // Get recent loan applications
    const loans = await prisma.loan.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
    })

    // Format activities
    const activities = []

    // Add transactions
    transactions.forEach((t: any) => {
      let title = ''
      let icon = 'TRANSACTION'
      let amount = t.amount
      
      switch (t.type) {
        case 'CONTRIBUTION':
          title = 'Savings Contribution'
          break
        case 'LOAN_REPAYMENT':
          title = 'Loan Repayment'
          break
        case 'WITHDRAWAL':
          title = 'Withdrawal Request'
          amount = -t.amount
          break
        case 'LOAN_DISBURSEMENT':
          title = 'Loan Disbursement'
          break
        default:
          title = t.type?.replace('_', ' ') || 'Transaction'
      }

      activities.push({
        id: t.id,
        type: t.type,
        title: title,
        amount: amount,
        status: t.status === 'COMPLETED' ? 'Completed' : t.status,
        createdAt: t.createdAt,
      })
    })

    // Add loan applications
    loans.forEach((l: any) => {
      activities.push({
        id: l.id,
        type: 'LOAN_APPLICATION',
        title: 'Loan Application',
        amount: l.amount,
        status: l.status === 'PENDING' ? 'Pending' : l.status,
        createdAt: l.createdAt,
      })
    })

    // Sort by date (newest first) and take top 5
    const sortedActivities = activities
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5)

    return NextResponse.json(sortedActivities)
  } catch (error) {
    console.error('Error fetching recent activity:', error)
    return NextResponse.json(
      { error: 'Failed to fetch recent activity' },
      { status: 500 }
    )
  }
}
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

interface Activity {
  id: string
  type: string
  title: string
  amount: number
  status: string
  createdAt: Date
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id
    const activities: Activity[] = []

    // 1. Get loan applications with their status
    const loans = await prisma.loan.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: {
        payments: {
          orderBy: { paymentDate: 'desc' },
          take: 1,
        },
      },
    })

    // 2. Get transactions
    const transactions = await prisma.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })

    // 3. Get withdrawals
    const withdrawals = await prisma.withdrawal.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })

    // Add loan activities (shows the full journey)
    loans.forEach((loan: any) => {
      // Loan Application Submitted
      activities.push({
        id: `loan-app-${loan.id}`,
        type: 'LOAN_APPLICATION',
        title: 'Loan Application Submitted',
        amount: loan.amount,
        status: loan.status === 'PENDING' ? 'Pending Review' : loan.status,
        createdAt: loan.createdAt,
      })

      // If approved, show approval activity
      if (loan.approvalDate) {
        activities.push({
          id: `loan-approve-${loan.id}`,
          type: 'LOAN_APPROVED',
          title: 'Loan Application Approved',
          amount: loan.amount,
          status: 'Approved',
          createdAt: loan.approvalDate,
        })
      }

      // If disbursed, show disbursement activity
      if (loan.disbursementDate) {
        activities.push({
          id: `loan-disburse-${loan.id}`,
          type: 'LOAN_DISBURSED',
          title: 'Loan Funds Disbursed',
          amount: loan.amount,
          status: 'Disbursed',
          createdAt: loan.disbursementDate,
        })
      }

      // If rejected, show rejection activity
      if (loan.status === 'REJECTED') {
        activities.push({
          id: `loan-reject-${loan.id}`,
          type: 'LOAN_REJECTED',
          title: 'Loan Application Rejected',
          amount: loan.amount,
          status: 'Rejected',
          createdAt: loan.updatedAt,
        })
      }

      // Add loan payments
      if (loan.payments && loan.payments.length > 0) {
        loan.payments.forEach((payment: any) => {
          activities.push({
            id: `loan-payment-${payment.id}`,
            type: 'LOAN_PAYMENT',
            title: 'Loan Payment Made',
            amount: payment.amount,
            status: 'Completed',
            createdAt: payment.paymentDate,
          })
        })
      }
    })

    // Add contribution activities
    transactions.forEach((t: any) => {
      if (t.type === 'CONTRIBUTION') {
        activities.push({
          id: `contribution-${t.id}`,
          type: 'CONTRIBUTION',
          title: 'Savings Contribution',
          amount: t.amount,
          status: t.status === 'COMPLETED' ? 'Completed' : t.status,
          createdAt: t.createdAt,
        })
      }
    })

    // Add withdrawal activities
    withdrawals.forEach((w: any) => {
      activities.push({
        id: `withdrawal-${w.id}`,
        type: 'WITHDRAWAL',
        title: w.status === 'PENDING' ? 'Withdrawal Request' : 
               w.status === 'COMPLETED' ? 'Withdrawal Completed' : 
               'Withdrawal Rejected',
        amount: -w.amount,
        status: w.status === 'PENDING' ? 'Pending Approval' : 
                w.status === 'COMPLETED' ? 'Completed' : 
                'Rejected',
        createdAt: w.createdAt,
      })
    })

    // Sort by date (newest first) and take top 10
    const sortedActivities = activities
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 10)

    return NextResponse.json(sortedActivities)
  } catch (error) {
    console.error('Error fetching recent activity:', error)
    return NextResponse.json(
      { error: 'Failed to fetch recent activity' },
      { status: 500 }
    )
  }
}
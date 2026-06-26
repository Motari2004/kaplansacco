import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

interface Contribution {
  id: string
  amount: number
  month: Date
  paidDate: Date
  status: string
  receiptNo: string
}

interface Transaction {
  id: string
  type: string
  amount: number
  description: string
  status: string
  createdAt: Date
  receiptNo: string
}

interface Loan {
  id: string
  amount: number
  totalRepayable: number
  monthlyInstallment: number
  status: string
  purpose: string
  createdAt: Date
  dueDate: Date
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') || 'savings'
    const range = searchParams.get('range') || 'this-month'
    const start = searchParams.get('start')
    const end = searchParams.get('end')

    // Get date range
    let startDate: Date
    let endDate: Date = new Date()

    switch (range) {
      case 'today':
        startDate = new Date()
        startDate.setHours(0, 0, 0, 0)
        break
      case 'this-week':
        startDate = new Date()
        startDate.setDate(startDate.getDate() - 7)
        break
      case 'this-month':
        startDate = new Date()
        startDate.setDate(1)
        break
      case 'this-quarter':
        startDate = new Date()
        startDate.setMonth(startDate.getMonth() - 3)
        break
      case 'this-year':
        startDate = new Date()
        startDate.setMonth(0, 1)
        break
      case 'all':
        startDate = new Date(2020, 0, 1)
        break
      case 'custom':
        startDate = start ? new Date(start) : new Date()
        endDate = end ? new Date(end) : new Date()
        break
      default:
        startDate = new Date()
        startDate.setDate(1)
    }

    let data: any[] = []
    let total = 0
    let totalAmount = 0
    let average = 0
    let lastActivity: Date | null = null

    const userId = session.user.id

    switch (type) {
      case 'savings': {
        const savings = await prisma.contribution.findMany({
          where: {
            userId,
            paidDate: {
              gte: startDate,
              lte: endDate,
            },
          },
          select: {
            id: true,
            amount: true,
            month: true,
            paidDate: true,
            status: true,
            receiptNo: true,
          },
          orderBy: { paidDate: 'desc' },
        })
        data = savings
        total = savings.length
        totalAmount = (savings as Contribution[]).reduce((sum: number, s: Contribution) => sum + s.amount, 0)
        average = total > 0 ? totalAmount / total : 0
        lastActivity = savings.length > 0 ? savings[0].paidDate : null
        break
      }

      case 'transactions': {
        const transactions = await prisma.transaction.findMany({
          where: {
            userId,
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          },
          select: {
            id: true,
            type: true,
            amount: true,
            description: true,
            status: true,
            createdAt: true,
            receiptNo: true,
          },
          orderBy: { createdAt: 'desc' },
        })
        data = transactions
        total = transactions.length
        totalAmount = (transactions as Transaction[]).reduce((sum: number, t: Transaction) => sum + t.amount, 0)
        average = total > 0 ? totalAmount / total : 0
        lastActivity = transactions.length > 0 ? transactions[0].createdAt : null
        break
      }

      case 'contributions': {
        const contributions = await prisma.contribution.findMany({
          where: {
            userId,
            paidDate: {
              gte: startDate,
              lte: endDate,
            },
          },
          select: {
            id: true,
            amount: true,
            month: true,
            paidDate: true,
            status: true,
            receiptNo: true,
          },
          orderBy: { paidDate: 'desc' },
        })
        data = contributions
        total = contributions.length
        totalAmount = (contributions as Contribution[]).reduce((sum: number, c: Contribution) => sum + c.amount, 0)
        average = total > 0 ? totalAmount / total : 0
        lastActivity = contributions.length > 0 ? contributions[0].paidDate : null
        break
      }

      case 'loans': {
        const loans = await prisma.loan.findMany({
          where: {
            userId,
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          },
          select: {
            id: true,
            amount: true,
            totalRepayable: true,
            monthlyInstallment: true,
            status: true,
            purpose: true,
            createdAt: true,
            dueDate: true,
          },
          orderBy: { createdAt: 'desc' },
        })
        data = loans
        total = loans.length
        totalAmount = (loans as Loan[]).reduce((sum: number, l: Loan) => sum + l.amount, 0)
        average = total > 0 ? totalAmount / total : 0
        lastActivity = loans.length > 0 ? loans[0].createdAt : null
        break
      }

      default:
        data = []
    }

    return NextResponse.json({
      data,
      total,
      totalAmount,
      average,
      lastActivity,
      dateRange: {
        start: startDate,
        end: endDate,
      },
    })
  } catch (error) {
    console.error('Error generating user report:', error)
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    )
  }
}
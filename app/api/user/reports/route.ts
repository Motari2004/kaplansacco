import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

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

    let data = []
    let total = 0
    let totalAmount = 0
    let average = 0
    let lastActivity = null

    const userId = session.user.id

    switch (type) {
      case 'savings':
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
        totalAmount = savings.reduce((sum, s) => sum + s.amount, 0)
        average = total > 0 ? totalAmount / total : 0
        lastActivity = savings.length > 0 ? savings[0].paidDate : null
        break

      case 'transactions':
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
        totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0)
        average = total > 0 ? totalAmount / total : 0
        lastActivity = transactions.length > 0 ? transactions[0].createdAt : null
        break

      case 'contributions':
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
        totalAmount = contributions.reduce((sum, c) => sum + c.amount, 0)
        average = total > 0 ? totalAmount / total : 0
        lastActivity = contributions.length > 0 ? contributions[0].paidDate : null
        break

      case 'loans':
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
        totalAmount = loans.reduce((sum, l) => sum + l.amount, 0)
        average = total > 0 ? totalAmount / total : 0
        lastActivity = loans.length > 0 ? loans[0].createdAt : null
        break

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
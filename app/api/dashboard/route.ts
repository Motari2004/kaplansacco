import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Get stats
    const [
      totalMembers,
      activeMembers,
      totalSavings,
      totalLoans,
      activeLoans,
      totalContributions,
      recentTransactions
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'MEMBER' } }),
      prisma.user.count({ where: { role: 'MEMBER', status: 'ACTIVE' } }),
      prisma.user.aggregate({ _sum: { savingsBalance: true } }),
      prisma.loan.aggregate({ _sum: { amount: true } }),
      prisma.loan.count({ where: { status: { in: ['APPROVED', 'DISBURSED'] } } }),
      prisma.contribution.aggregate({ _sum: { amount: true } }),
      prisma.transaction.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              memberNumber: true,
            }
          }
        }
      })
    ])

    const stats = {
      totalMembers,
      activeMembers,
      totalSavings: totalSavings._sum.savingsBalance || 0,
      totalLoans: totalLoans._sum.amount || 0,
      activeLoans,
      totalContributions: totalContributions._sum.amount || 0,
    }

    const recentActivities = recentTransactions.map(t => ({
      id: t.id,
      type: t.type.replace('_', ' '),
      amount: t.amount,
      member: `${t.user.firstName} ${t.user.lastName}`,
      date: t.createdAt.toISOString(),
      status: t.status.toLowerCase(),
    }))

    return NextResponse.json({ stats, recentActivities })
  } catch (error) {
    console.error('Dashboard API error:', error)
    return NextResponse.json(
      { message: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
}
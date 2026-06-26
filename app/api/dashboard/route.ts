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

    // Get dashboard stats
    const [
      totalMembers,
      totalSavings,
      totalLoans,
      activeLoans,
      recentTransactions,
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'MEMBER' } }),
      prisma.user.aggregate({ _sum: { savingsBalance: true } }),
      prisma.loan.aggregate({ _sum: { amount: true } }),
      prisma.loan.count({ where: { status: { in: ['APPROVED', 'DISBURSED'] } } }),
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

    // Get recent members
    const recentMembers = await prisma.user.findMany({
      where: { role: 'MEMBER' },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        memberNumber: true,
        savingsBalance: true,
        status: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    })

    const stats = {
      totalMembers,
      totalSavings: totalSavings._sum.savingsBalance || 0,
      totalLoans: totalLoans._sum.amount || 0,
      activeLoans,
    }

    // Format transactions with proper typing
    const formattedTransactions = recentTransactions.map((t: any) => ({
      id: t.id,
      type: t.type.replace('_', ' '),
      amount: t.amount,
      member: `${t.user.firstName} ${t.user.lastName}`,
      date: t.createdAt.toISOString(),
      status: t.status.toLowerCase(),
    }))

    return NextResponse.json({
      stats,
      recentMembers,
      recentTransactions: formattedTransactions,
    })
  } catch (error) {
    console.error('Dashboard API error:', error)
    return NextResponse.json(
      { message: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
}
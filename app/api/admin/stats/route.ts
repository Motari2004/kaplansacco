import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const [
      totalMembers,
      totalSavings,
      totalLoans,
      activeLoans,
      totalContributions,
      pendingWithdrawals,
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'MEMBER' } }),
      prisma.user.aggregate({ _sum: { savingsBalance: true } }),
      prisma.loan.aggregate({ _sum: { amount: true } }),
      prisma.loan.count({ where: { status: { in: ['APPROVED', 'DISBURSED'] } } }),
      prisma.contribution.aggregate({ _sum: { amount: true } }),
      prisma.withdrawal.count({ where: { status: 'PENDING' } }), // This gets pending withdrawals
    ])

    return NextResponse.json({
      totalMembers,
      pendingWithdrawals: pendingWithdrawals || 0, // Include this
      totalSavings: totalSavings._sum.savingsBalance || 0,
      totalLoans: totalLoans._sum.amount || 0,
      activeLoans,
      totalContributions: totalContributions._sum.amount || 0,
    })
  } catch (error) {
    console.error('Error fetching admin stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
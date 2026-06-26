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

    const [totalMembers, totalContributions, totalAmount] = await Promise.all([
      prisma.user.count({ where: { role: 'MEMBER' } }),
      prisma.contribution.count(),
      prisma.contribution.aggregate({ _sum: { amount: true } }),
    ])

    // Get unique months with contributions
    const contributions = await prisma.contribution.findMany({
      select: { month: true },
      distinct: ['month'],
    })

    const monthsActive = contributions.length

    return NextResponse.json({
      totalMembers,
      totalContributions,
      totalAmount: totalAmount._sum.amount || 0,
      monthsActive,
    })
  } catch (error) {
    console.error('Error fetching clean savings stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
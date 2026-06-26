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

    const withdrawals = await prisma.withdrawal.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            memberNumber: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(withdrawals)
  } catch (error) {
    console.error('Error fetching withdrawals:', error)
    return NextResponse.json(
      { error: 'Failed to fetch withdrawals' },
      { status: 500 }
    )
  }
}
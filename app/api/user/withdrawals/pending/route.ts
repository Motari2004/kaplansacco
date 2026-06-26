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

    const count = await prisma.withdrawal.count({
      where: {
        userId: session.user.id,
        status: 'PENDING',
      },
    })

    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error fetching pending withdrawals:', error)
    return NextResponse.json(
      { error: 'Failed to fetch pending withdrawals' },
      { status: 500 }
    )
  }
}
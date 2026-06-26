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

    const members = await prisma.user.findMany({
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

    return NextResponse.json(members)
  } catch (error) {
    console.error('Error fetching recent members:', error)
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    )
  }
}
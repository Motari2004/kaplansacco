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

    const loans = await prisma.loan.findMany({
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
        payments: {
          orderBy: { paymentDate: 'desc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(loans)
  } catch (error) {
    console.error('Error fetching loans:', error)
    return NextResponse.json(
      { error: 'Failed to fetch loans' },
      { status: 500 }
    )
  }
}
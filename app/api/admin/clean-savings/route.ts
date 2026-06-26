import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { members } = body

    let whereClause: any = {}

    if (members !== 'all' && Array.isArray(members) && members.length > 0) {
      whereClause = { userId: { in: members } }
    }

    // Get all contributions to be deleted
    const contributions = await prisma.contribution.findMany({
      where: whereClause,
      select: { userId: true, amount: true },
    })

    // Delete contributions
    const deleted = await prisma.contribution.deleteMany({
      where: whereClause,
    })

    // Update each user's savings balance
    for (const contribution of contributions) {
      await prisma.user.update({
        where: { id: contribution.userId },
        data: {
          savingsBalance: {
            decrement: contribution.amount,
          },
        },
      })
    }

    // Create audit log
    await prisma.transaction.create({
      data: {
        userId: session.user.id,
        type: 'ADMIN_ACTION',
        amount: 0,
        description: `Cleaned savings for ${deleted.count} contributions`,
        status: 'COMPLETED',
        processedBy: session.user.id,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Savings cleaned successfully',
      affectedCount: deleted.count,
    })
  } catch (error) {
    console.error('Error cleaning savings:', error)
    return NextResponse.json(
      { error: 'Failed to clean savings' },
      { status: 500 }
    )
  }
}
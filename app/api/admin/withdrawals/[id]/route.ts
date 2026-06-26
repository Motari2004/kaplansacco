import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    const { id } = await params
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { status } = body

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      )
    }

    // Check if withdrawal exists
    const withdrawal = await prisma.withdrawal.findUnique({
      where: { id },
    })

    if (!withdrawal) {
      return NextResponse.json(
        { error: 'Withdrawal not found' },
        { status: 404 }
      )
    }

    // Update withdrawal status
    const updateData: any = { 
      status,
      processedBy: session.user.id,
      processedAt: new Date(),
    }

    const updatedWithdrawal = await prisma.withdrawal.update({
      where: { id },
      data: updateData,
    })

    // Update transaction status
    if (status === 'COMPLETED') {
      await prisma.transaction.updateMany({
        where: { 
          reference: id,
          type: 'WITHDRAWAL',
        },
        data: {
          status: 'COMPLETED',
        },
      })
    } else if (status === 'REJECTED') {
      // Refund the money back to the user
      await prisma.user.update({
        where: { id: withdrawal.userId },
        data: {
          savingsBalance: {
            increment: withdrawal.amount,
          },
        },
      })
      
      await prisma.transaction.updateMany({
        where: { 
          reference: id,
          type: 'WITHDRAWAL',
        },
        data: {
          status: 'FAILED',
        },
      })
    }

    return NextResponse.json({
      success: true,
      message: `Withdrawal ${status} successfully`,
      withdrawal: updatedWithdrawal,
    })
  } catch (error) {
    console.error('Error updating withdrawal:', error)
    return NextResponse.json(
      { error: 'Failed to update withdrawal' },
      { status: 500 }
    )
  }
}
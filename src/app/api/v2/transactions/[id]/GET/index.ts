/**
 * GET handler untuk /api/v2/transactions/[id]
 * 
 * Endpoint untuk mendapatkan detail transaksi berdasarkan ID
 */

import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { transactionsService } from '@/v2/services/database/transactions';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;

  try {
    const transaction = await transactionsService.GET.ById(resolvedParams.id);
    
    if (!transaction) {
      return NextResponse.json(
        { success: false, error: 'Transaction not found' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json({
      success: true,
      data: transaction
    });
  } catch (error) {
    console.error('Error fetching transaction:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch transaction' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
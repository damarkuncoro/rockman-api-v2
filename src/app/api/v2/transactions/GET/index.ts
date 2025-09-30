/**
 * GET handler untuk /api/v2/transactions
 * 
 * Endpoint untuk mendapatkan daftar transactions
 */

import { NextRequest, NextResponse } from 'next/server';
import { transactionsService } from '@/v2/services/database/transactions';

export async function GET(request: NextRequest) {
  try {
    // Ambil parameter query
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // Gunakan service untuk mendapatkan data
    const transactions = await transactionsService.GET.All();
    
    // Implementasi pagination di level aplikasi
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedTransactions = transactions.slice(startIndex, endIndex);
    
    // Hitung total untuk pagination
    const totalCount = transactions.length;
    
    // Buat response
    return NextResponse.json({
      success: true,
      data: paginatedTransactions,
      meta: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}
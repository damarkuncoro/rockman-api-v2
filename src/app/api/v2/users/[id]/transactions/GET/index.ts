/**
 * GET handler untuk /api/v2/users/[id]/transactions
 * 
 * Endpoint untuk mendapatkan daftar transactions berdasarkan user ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { transactionsService } from '@/v2/services/database/transactions';
import { usersService } from '@/v2/services/database/users';

/**
 * GET handler untuk mengambil transactions berdasarkan user ID
 * 
 * @param request - NextRequest object
 * @param params - Parameter dari URL (id)
 * @returns NextResponse dengan data transactions atau error
 */

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;


    // Validasi user ID
    const user = await usersService.GET.ById(userId);
    if (!user) {
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    // Ambil parameter query untuk pagination
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Ambil semua transactions dan filter berdasarkan user ID
    const allTransactions = await transactionsService.GET.All();
    const userTransactions = allTransactions.filter(transaction => transaction.userId === userId);

    // Implementasi pagination di level aplikasi
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    // Hitung total untuk pagination
    const totalCount = userTransactions.length;

    // Buat response
    return NextResponse.json({
      success: true,
      data: userTransactions.slice(startIndex, endIndex),
      meta: {
        pagination: {
          page,
          limit,
          total: totalCount,
          totalPages: Math.ceil(totalCount / limit)
        }
      }
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error("Error fetching user transactions:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data transaksi" },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
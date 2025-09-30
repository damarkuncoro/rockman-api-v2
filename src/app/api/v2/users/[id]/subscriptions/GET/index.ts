/**
 * GET handler untuk /api/v2/users/[id]/subscriptions
 * 
 * Endpoint untuk mendapatkan daftar langganan berdasarkan user ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { subscriptionsService } from '@/v2/services/database/subscriptions';
import { usersService } from '@/v2/services/database/users';

/**
 * GET handler untuk mengambil langganan berdasarkan user ID
 * 
 * @param request - NextRequest object
 * @param params - Parameter dari URL (id)
 * @returns NextResponse dengan data langganan atau error
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

    // Ambil parameter query untuk pagination dan filter
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');

    // Ambil semua langganan dan filter berdasarkan user ID
    const allSubscriptions = await subscriptionsService.GET.All();
    let userSubscriptions = allSubscriptions.filter(subscription => subscription.userId === userId);
    
    // Filter berdasarkan status jika ada
    if (status) {
      userSubscriptions = userSubscriptions.filter(subscription => subscription.status === status);
    }

    // Implementasi pagination di level aplikasi
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    // Hitung total untuk pagination
    const totalCount = userSubscriptions.length;

    // Buat response
    return NextResponse.json({
      success: true,
      data: userSubscriptions.slice(startIndex, endIndex),
      meta: {
        pagination: {
          page,
          limit,
          total: totalCount,
          totalPages: Math.ceil(totalCount / limit)
        },
        filters: {
          status: status || 'all'
        }
      }
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error("Error fetching user subscriptions:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data langganan" },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
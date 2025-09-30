/**
 * GET handler untuk /api/v2/users/[id]/notifications
 * 
 * Endpoint untuk mendapatkan daftar notifikasi berdasarkan user ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { notificationsService } from '@/v2/services/database/notifications';
import { usersService } from '@/v2/services/database/users';

/**
 * GET handler untuk mengambil notifikasi berdasarkan user ID
 * 
 * @param request - NextRequest object
 * @param params - Parameter dari URL (id)
 * @returns NextResponse dengan data notifikasi atau error
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
    const isRead = searchParams.get('isRead');

    // Ambil semua notifikasi dan filter berdasarkan user ID
    const allNotifications = await notificationsService.GET.All();
    let userNotifications = allNotifications.filter(notification => notification.userId === userId);
    
    // Filter tambahan berdasarkan status read jika parameter disediakan
    if (isRead !== null) {
      const isReadBool = isRead === 'true';
      userNotifications = userNotifications.filter(notification => notification.isRead === isReadBool);
    }

    // Implementasi pagination di level aplikasi
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    // Hitung total untuk pagination
    const totalCount = userNotifications.length;

    // Buat response
    return NextResponse.json({
      success: true,
      data: userNotifications.slice(startIndex, endIndex),
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
    console.error("Error fetching user notifications:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data notifikasi" },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
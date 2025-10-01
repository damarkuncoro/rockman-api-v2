import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userMembershipsService } from '@/v2/services/database/user_memberships';
import { usersService } from '@/v2/services/database/users';

/**
 * Handler untuk mendapatkan semua keanggotaan dari pengguna tertentu
 * @param request - Request dari client
 * @param context - Konteks request yang berisi parameter
 * @returns Response dengan data keanggotaan pengguna
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
        { message: 'Pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    // Menggunakan service layer untuk mendapatkan semua keanggotaan
    const allMemberships = await userMembershipsService.GET.All();
    
    // Filter keanggotaan berdasarkan userId
    const memberships = allMemberships.filter(membership => membership.userId === userId);
    
    if (!memberships || memberships.length === 0) {
      return NextResponse.json(
        { message: 'Tidak ada keanggotaan ditemukan untuk pengguna ini', memberships: [] },
        { status: StatusCodes.OK }
      );
    }

    return NextResponse.json({ 
      message: 'Keanggotaan pengguna berhasil diambil', 
      memberships 
    }, { status: StatusCodes.OK });
  } catch {
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil data keanggotaan pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
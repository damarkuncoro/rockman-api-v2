import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userMembershipsService } from '@/v2/services/database/user_memberships';

/**
 * Handler untuk mendapatkan data keanggotaan pengguna berdasarkan ID
 * @param request - Request dari client
 * @param params - Parameter dari URL, termasuk ID keanggotaan pengguna
 * @returns Response dengan data keanggotaan pengguna
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  try {
    const userMembership = await userMembershipsService.GET.ById(id);
    
    if (!userMembership) {
      return NextResponse.json(
        { message: 'Keanggotaan pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(userMembership, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching user membership:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil data keanggotaan pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
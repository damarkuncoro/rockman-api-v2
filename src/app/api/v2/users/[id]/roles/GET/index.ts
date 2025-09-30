/**
 * Handler GET untuk endpoint /users/[id]/roles
 * Mengambil peran pengguna berdasarkan ID
 */
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { userRolesService } from '@/v2/services/database/user_roles';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;
    
    if (!userId) {
      return NextResponse.json(
        { message: 'ID pengguna tidak valid' },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    // Mengambil peran pengguna dari service
    const allRoles = await userRolesService.GET.All();
    const userRoles = allRoles.filter(role => role.userId === userId);
    
    if (!userRoles || userRoles.length === 0) {
      return NextResponse.json(
        { message: 'Peran pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(userRoles, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error saat mengambil peran pengguna:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil peran pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
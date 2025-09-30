/**
 * Handler GET untuk endpoint /users/[id]/identities
 * Mengambil identitas pengguna berdasarkan ID
 */
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { userIdentitiesService } from '@/v2/services/database/user_identities';

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

    // Mengambil identitas pengguna dari service
    const allIdentities = await userIdentitiesService.GET.All();
    const userIdentities = allIdentities.filter(identity => identity.userId === userId);
    
    
    if (!userIdentities || userIdentities.length === 0) {
      return NextResponse.json(
        { message: 'Identitas pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(userIdentities, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error saat mengambil identitas pengguna:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil identitas pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
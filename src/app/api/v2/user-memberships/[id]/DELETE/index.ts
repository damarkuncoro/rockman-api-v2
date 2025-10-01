import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userMembershipsService } from '@/v2/services/database/user_memberships';

/**
 * Handler untuk menghapus keanggotaan pengguna berdasarkan ID
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  try {
    const deleted = await userMembershipsService.DELETE.Remove(id);

    if (!deleted) {
      return NextResponse.json(
        { message: 'Keanggotaan pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(
      { message: 'Keanggotaan pengguna berhasil dihapus' },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.error('Error deleting user membership:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat menghapus keanggotaan pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
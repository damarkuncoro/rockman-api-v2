import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { loyaltyPointsService } from '@/v2/services/database/loyalty_points';

/**
 * Handler untuk menghapus poin loyalitas berdasarkan ID
 * @param request - Request dari client
 * @param context - Konteks request yang berisi parameter
 * @returns Response dengan status penghapusan
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  try {
    const deleted = await loyaltyPointsService.DELETE.Remove(id);

    if (!deleted) {
      return NextResponse.json(
        { message: 'Poin loyalitas tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(
      { message: 'Poin loyalitas berhasil dihapus' },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.error('Error deleting loyalty point:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat menghapus poin loyalitas' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
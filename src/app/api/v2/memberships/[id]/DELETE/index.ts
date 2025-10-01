import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { membershipsService } from '@/v2/services/database/memberships';

/**
 * Handler untuk menghapus membership berdasarkan ID
 * @param request - Request dari client
 * @param params - Parameter dari URL, termasuk ID membership
 * @returns Response dengan status sukses atau pesan error
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  try {
    const deleted = await membershipsService.DELETE.Remove(id);

    if (!deleted) {
      return NextResponse.json(
        { message: 'Membership tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(
      { message: 'Membership berhasil dihapus' },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.error('Error deleting membership:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat menghapus membership' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
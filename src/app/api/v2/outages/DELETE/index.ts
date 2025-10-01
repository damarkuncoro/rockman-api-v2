import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { outagesService } from '@/v2/services/database/outages';

export async function DELETE(
  request: NextRequest,
) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { message: 'ID parameter is required' },
      { status: StatusCodes.BAD_REQUEST }
    );
  }

  try {
    const deleted = await outagesService.DELETE.Remove(id);

    if (!deleted) {
      return NextResponse.json(
        { message: 'Gangguan tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(
      { message: 'Gangguan berhasil dihapus' },
      { status: StatusCodes.OK }
    );
  } catch {
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat menghapus gangguan' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
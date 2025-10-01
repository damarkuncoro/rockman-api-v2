import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userProductsService } from '@/v2/services/database/user_products';

/**
 * Handler untuk menghapus produk pengguna berdasarkan ID
 * @param request - Request dari client
 * @param params - Parameter dari URL, termasuk ID produk pengguna
 * @returns Response dengan status penghapusan
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const result = await userProductsService.DELETE.Remove(id);
    
    if (!result) {
      return NextResponse.json(
        { message: 'Produk pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    return NextResponse.json({
      message: 'Produk pengguna berhasil dihapus'
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error deleting user product:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat menghapus produk pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
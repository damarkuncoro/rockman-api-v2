import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userProductsService } from '@/v2/services/database/user_products';

/**
 * Handler untuk mendapatkan produk pengguna berdasarkan ID
 * @param request - Request dari client
 * @param params - Parameter dari URL, termasuk ID produk pengguna
 * @returns Response dengan data produk pengguna
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const userProduct = await userProductsService.GET.ById(id);
    
    if (!userProduct) {
      return NextResponse.json(
        { message: 'Produk pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    return NextResponse.json({
      message: 'Data produk pengguna berhasil diambil',
      userProduct
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching user product:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil data produk pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
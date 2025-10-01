import { StatusCodes } from 'http-status-codes';
import { NextResponse } from 'next/server';
import { userProductsService } from '@/v2/services/database/user_products';

/**
 * Handler untuk mendapatkan semua data user-products
 * @returns Response dengan data user-products atau pesan error
 */
export async function GET() {
  try {
    const userProducts = await userProductsService.GET.All();
    return NextResponse.json(userProducts, { status: StatusCodes.OK });
  } catch {
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil data produk pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userProductsService } from '@/v2/services/database/user_products';
import { usersService } from '@/v2/services/database/users';

/**
 * Handler untuk mendapatkan semua produk yang dimiliki oleh pengguna tertentu
 * @param request - Request dari client
 * @param context - Konteks request yang berisi parameter
 * @returns Response dengan data produk pengguna
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;
    
    // Validasi user ID
    const user = await usersService.GET.ById(userId);
    if (!user) {
      return NextResponse.json(
        { message: 'Pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    // Menggunakan service layer untuk mendapatkan semua produk pengguna
    const allUserProducts = await userProductsService.GET.All();
    
    // Filter produk berdasarkan userId
    const products = allUserProducts.filter(product => product.userId === userId);
    
    if (!products || products.length === 0) {
      return NextResponse.json(
        { message: 'Tidak ada produk yang ditemukan untuk pengguna ini', products: [] },
        { status: StatusCodes.OK }
      );
    }
    
    return NextResponse.json({
      message: 'Data produk pengguna berhasil diambil',
      products
    }, { status: StatusCodes.OK });
  } catch {
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil data produk pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
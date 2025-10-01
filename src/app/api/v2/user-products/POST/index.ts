import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userProductsService } from '@/v2/services/database/user_products';
import { z } from 'zod';

// Skema validasi untuk data produk pengguna baru
const userProductSchema = z.object({
  userId: z.string().uuid(),
  productId: z.string().uuid()
});

/**
 * Handler untuk membuat produk pengguna baru
 * @param request - Request dari client
 * @returns Response dengan data produk pengguna yang dibuat
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validasi data input
    const validationResult = userProductSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Data tidak valid', errors: validationResult.error.format() },
        { status: StatusCodes.BAD_REQUEST }
      );
    }
    
    const userProductData = validationResult.data;
    
    // Buat produk pengguna baru
    const newUserProduct = await userProductsService.POST.Create(userProductData);
    
    return NextResponse.json({
      message: 'Produk pengguna berhasil dibuat',
      userProduct: newUserProduct
    }, { status: StatusCodes.CREATED });
  } catch (error) {
    console.error('Error creating user product:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat membuat produk pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
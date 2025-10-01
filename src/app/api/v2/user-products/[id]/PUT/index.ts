import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userProductsService } from '@/v2/services/database/user_products';
import { z } from 'zod';

// Skema validasi untuk pembaruan data produk pengguna
const updateUserProductSchema = z.object({
  userId: z.string().uuid().optional(),
  productId: z.string().uuid().optional()
});

/**
 * Handler untuk memperbarui produk pengguna berdasarkan ID
 * @param request - Request dari client
 * @param params - Parameter dari URL, termasuk ID produk pengguna
 * @returns Response dengan data produk pengguna yang diperbarui
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const body = await request.json();
    
    // Validasi data input
    const validationResult = updateUserProductSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Data tidak valid', errors: validationResult.error.format() },
        { status: StatusCodes.BAD_REQUEST }
      );
    }
    
    const updateData = validationResult.data;
    
    // Perbarui produk pengguna
    const updatedUserProduct = await userProductsService.PUT.Update(id, updateData);
    
    if (!updatedUserProduct) {
      return NextResponse.json(
        { message: 'Produk pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    return NextResponse.json({
      message: 'Produk pengguna berhasil diperbarui',
      userProduct: updatedUserProduct
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error updating user product:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat memperbarui produk pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
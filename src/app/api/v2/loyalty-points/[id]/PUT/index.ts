import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { loyaltyPointsService } from '@/v2/services/database/loyalty_points';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid().optional(),
  points: z.number().optional(),
  description: z.string().optional(),
  transactionDate: z.string().datetime().optional(),
  expiryDate: z.string().datetime().optional(),
});

/**
 * Handler untuk memperbarui data poin loyalitas berdasarkan ID
 * @param request - Request dari client
 * @param context - Konteks request yang berisi parameter
 * @returns Response dengan data poin loyalitas yang diperbarui atau pesan error
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  try {
    const loyaltyPoint = await loyaltyPointsService.PUT.Update(id, parsed.data);

    if (!loyaltyPoint) {
      return NextResponse.json(
        { message: 'Poin loyalitas tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(loyaltyPoint, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error updating loyalty point:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat memperbarui poin loyalitas' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
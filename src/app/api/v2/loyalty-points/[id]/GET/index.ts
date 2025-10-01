import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { loyaltyPointsService } from '@/v2/services/database/loyalty_points';

/**
 * Handler untuk mendapatkan data poin loyalitas berdasarkan ID
 * @param request - Request dari client
 * @param context - Konteks request yang berisi parameter
 * @returns Response dengan data poin loyalitas atau pesan error
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const loyaltyPoints = await loyaltyPointsService.GET.ById(id);
  if (!loyaltyPoints) {
    return NextResponse.json(
      { message: 'Poin loyalitas tidak ditemukan' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(loyaltyPoints, { status: StatusCodes.OK });
}
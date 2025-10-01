import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { membershipsService } from '@/v2/services/database/memberships';

import { z } from 'zod';

const schema = z.object({
  name: z.string().max(255).optional(),
  description: z.string().optional(),
  minPoints: z.number().optional(),
  discountPercentage: z.string().optional(),
});

/**
 * Handler untuk memperbarui data membership berdasarkan ID
 * @param request - Request dari client
 * @param params - Parameter dari URL, termasuk ID membership
 * @returns Response dengan data membership yang diperbarui atau pesan error
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
    const membership = await membershipsService.PUT.Update(id, parsed.data);

    if (!membership) {
      return NextResponse.json(
        { message: 'Membership tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(membership, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error updating membership:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat memperbarui membership' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
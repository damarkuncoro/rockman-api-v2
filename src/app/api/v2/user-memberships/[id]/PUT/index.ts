import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userMembershipsService } from '@/v2/services/database/user_memberships';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid().optional(),
  membershipId: z.string().uuid().optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
});

/**
 * Handler untuk memperbarui data keanggotaan pengguna berdasarkan ID
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
    const userMembership = await userMembershipsService.PUT.Update(id, parsed.data);

    if (!userMembership) {
      return NextResponse.json(
        { message: 'Keanggotaan pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(userMembership, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error updating user membership:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat memperbarui keanggotaan pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
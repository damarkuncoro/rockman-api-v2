import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { userMembershipsService } from '@/v2/services/database/user_memberships';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid(),
  membershipId: z.string().uuid(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
});

/**
 * Handler untuk membuat data keanggotaan pengguna baru
 * @param request - Request dari client
 * @returns Response dengan data keanggotaan pengguna yang dibuat
 */
export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  try {
    const userMembership = await userMembershipsService.POST.Create(parsed.data);
    return NextResponse.json(userMembership, { status: StatusCodes.CREATED });
  } catch (error) {
    console.error('Error creating user membership:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat membuat keanggotaan pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
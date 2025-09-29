import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { usersService } from '@/v2/services/database/users';

import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  username: z.string(),
  passwordHash: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const user = await usersService.POST.Create(parsed.data);

  return NextResponse.json(user, { status: StatusCodes.CREATED });
}
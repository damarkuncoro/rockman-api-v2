import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { rolesService } from '@/v2/services/database/roles';

import { z } from 'zod';

const schema = z.object({
  name: z.string().max(100),
  grantsAll: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const role = await rolesService.POST.Create(parsed.data);

  return NextResponse.json(role, { status: StatusCodes.CREATED });
}
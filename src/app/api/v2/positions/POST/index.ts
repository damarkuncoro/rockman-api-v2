import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { positionsService } from '@/v2/services/database/positions';

import { z } from 'zod';

const schema = z.object({
  title: z.string().max(100),
  description: z.string().optional(),
  departmentId: z.string().uuid().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const position = await positionsService.POST.Create(parsed.data);

  return NextResponse.json(position, { status: StatusCodes.CREATED });
}
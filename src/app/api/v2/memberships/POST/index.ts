import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { membershipsService } from '@/v2/services/database/memberships';

import { z } from 'zod';

const schema = z.object({
  name: z.string().max(255),
  description: z.string().optional(),
  minPoints: z.number(),
  discountPercentage: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const membership = await membershipsService.POST.Create(parsed.data);

  return NextResponse.json(membership, { status: StatusCodes.CREATED });
}
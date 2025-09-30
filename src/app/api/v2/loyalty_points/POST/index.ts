import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { loyaltyPointsService } from '@/v2/services/database/loyalty_points';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid(),
  points: z.number(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const loyaltyPoints = await loyaltyPointsService.POST.Create(parsed.data);

  return NextResponse.json(loyaltyPoints, { status: StatusCodes.CREATED });
}
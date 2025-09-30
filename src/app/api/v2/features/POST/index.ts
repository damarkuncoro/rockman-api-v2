import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { featuresService } from '@/v2/services/database/features';

import { z } from 'zod';

const schema = z.object({
  name: z.string().max(100),
  description: z.string().optional(),
  categoryId: z.string().uuid().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const feature = await featuresService.POST.Create(parsed.data);

  return NextResponse.json(feature, { status: StatusCodes.CREATED });
}
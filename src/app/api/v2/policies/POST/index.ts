import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { policiesService } from '@/v2/services/database/policies';

import { z } from 'zod';

const schema = z.object({
  featureId: z.string().uuid(),
  attribute: z.string().max(100),
  operator: z.string().max(10),
  value: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const policy = await policiesService.POST.Create(parsed.data);

  return NextResponse.json(policy, { status: StatusCodes.CREATED });
}
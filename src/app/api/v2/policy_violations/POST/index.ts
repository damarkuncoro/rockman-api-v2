import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { policyViolationsService } from '@/v2/services/database/policy_violations';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid().optional(),
  featureId: z.string().uuid().optional(),
  policyId: z.string().uuid().optional(),
  attribute: z.string().max(100),
  expectedValue: z.string(),
  actualValue: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const policyViolation = await policyViolationsService.POST.Create(parsed.data);

  return NextResponse.json(policyViolation, { status: StatusCodes.CREATED });
}
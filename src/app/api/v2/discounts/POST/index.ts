import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { discountsService } from '@/v2/services/database/discounts';

import { z } from 'zod';

const schema = z.object({
  code: z.string().max(100),
  discountType: z.enum(['percentage', 'fixed_amount']),
  value: z.string(),
  duration: z.enum(['once', 'repeating', 'forever']),
  durationInMonths: z.number().optional(),
  isActive: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const discount = await discountsService.POST.Create(parsed.data);

  return NextResponse.json(discount, { status: StatusCodes.CREATED });
}
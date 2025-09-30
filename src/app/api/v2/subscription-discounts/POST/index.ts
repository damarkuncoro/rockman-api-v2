import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { subscriptionDiscountsService } from '@/v2/services/database/subscription_discounts';

import { z } from 'zod';

const schema = z.object({
  subscriptionId: z.string().uuid(),
  discountId: z.string().uuid(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const subscriptionDiscount = await subscriptionDiscountsService.POST.Create(parsed.data);

  return NextResponse.json(subscriptionDiscount, { status: StatusCodes.CREATED });
}
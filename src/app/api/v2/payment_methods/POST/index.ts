import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { paymentMethodsService } from '@/v2/services/database/payment_methods';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid(),
  gatewayCustomerId: z.string().max(255),
  gatewayPaymentMethodId: z.string().max(255),
  cardBrand: z.string().max(50).optional(),
  last4: z.string().max(4).optional(),
  isDefault: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const paymentMethod = await paymentMethodsService.POST.Create(parsed.data);

  return NextResponse.json(paymentMethod, { status: StatusCodes.CREATED });
}
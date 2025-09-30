import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { paymentsService } from '@/v2/services/database/payments';

import { z } from 'zod';

const schema = z.object({
  invoiceId: z.string().uuid().optional(),
  payrollId: z.string().uuid().optional(),
  userId: z.string().uuid().optional(),
  customerId: z.string().uuid().optional(),
  paymentDate: z.string().pipe(z.coerce.date()),
  amountPaid: z.string(),
  paymentMethod: z.string().max(100),
  gatewayTransactionId: z.string().max(255).optional(),
  status: z.enum(['Pending', 'Succeeded', 'Failed']),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const payment = await paymentsService.POST.Create(parsed.data);

  return NextResponse.json(payment, { status: StatusCodes.CREATED });
}
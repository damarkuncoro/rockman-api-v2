import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { invoiceItemsService } from '@/v2/services/database/invoice_items';

import { z } from 'zod';

const schema = z.object({
  invoiceId: z.string().uuid(),
  description: z.string().max(255),
  quantity: z.number(),
  unitPrice: z.string(),
  totalPrice: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const invoiceItem = await invoiceItemsService.POST.Create(parsed.data);

  return NextResponse.json(invoiceItem, { status: StatusCodes.CREATED });
}
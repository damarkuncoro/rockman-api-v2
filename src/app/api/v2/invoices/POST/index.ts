import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { invoicesService } from '@/v2/services/database/invoices';

import { z } from 'zod';

const schema = z.object({
  subscriptionId: z.string().uuid().optional(),
  userId: z.string().uuid().optional(),
  customerId: z.string().uuid().optional(),
  invoiceNumber: z.string().max(100),
  issueDate: z.string(),
  dueDate: z.string(),
  totalAmount: z.string(),
  status: z.enum(['Draft', 'Sent', 'Paid', 'Void']),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const invoice = await invoicesService.POST.Create(parsed.data);

  return NextResponse.json(invoice, { status: StatusCodes.CREATED });
}
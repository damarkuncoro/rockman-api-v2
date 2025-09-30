import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { creditNotesService } from '@/v2/services/database/credit_notes';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid().optional(),
  originalInvoiceId: z.string().uuid().optional(),
  creditNoteNumber: z.string().max(100),
  issueDate: z.string(),
  totalAmount: z.string(),
  reason: z.string().max(255).optional(),
  status: z.enum(['Draft', 'Issued', 'Applied', 'Voided']),
  remainingBalance: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const creditNote = await creditNotesService.POST.Create(parsed.data);

  return NextResponse.json(creditNote, { status: StatusCodes.CREATED });
}
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { creditNoteApplicationsService } from '@/v2/services/database/credit_note_applications';

import { z } from 'zod';

const schema = z.object({
  creditNoteId: z.string().uuid(),
  invoiceId: z.string().uuid(),
  amountApplied: z.string(),
  applicationDate: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const creditNoteApplication = await creditNoteApplicationsService.POST.Create(parsed.data);

  return NextResponse.json(creditNoteApplication, { status: StatusCodes.CREATED });
}
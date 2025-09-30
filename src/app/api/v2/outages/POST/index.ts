import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { outagesService } from '@/v2/services/database/outages';

import { z } from 'zod';

const schema = z.object({
  startTime: z.string().pipe(z.coerce.date()),
  endTime: z.string().pipe(z.coerce.date()).optional(),
  affectedArea: z.string().max(255).optional(),
  description: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const outage = await outagesService.POST.Create(parsed.data);

  return NextResponse.json(outage, { status: StatusCodes.CREATED });
}
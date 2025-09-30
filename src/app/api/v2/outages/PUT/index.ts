import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { outagesService } from '@/v2/services/database/outages';

import { z } from 'zod';

const schema = z.object({
  id: z.string().uuid(),
  startTime: z.string().pipe(z.coerce.date()),
  endTime: z.string().pipe(z.coerce.date()).optional(),
  affectedArea: z.string().max(255).optional(),
  description: z.string(),
});

export async function PUT(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const { id, ...updateData } = parsed.data;

  try {
    const outage = await outagesService.PUT.Update(id, updateData);

    if (!outage) {
      return NextResponse.json(
        { message: 'Outage not found' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(outage, { status: StatusCodes.OK });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
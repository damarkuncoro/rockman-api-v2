import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { changeHistoryService } from '@/v2/services/database/change_history';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid().optional(),
  tableName: z.string().max(100),
  recordId: z.string(),
  action: z.string().max(10),
  oldValues: z.any().optional(),
  newValues: z.any().optional(),
  reason: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const changeHistory = await changeHistoryService.POST.Create(parsed.data);

  return NextResponse.json(changeHistory, { status: StatusCodes.CREATED });
}
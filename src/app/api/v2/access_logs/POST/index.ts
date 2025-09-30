import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { accessLogsService } from '@/v2/services/database/access_logs';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid().optional(),
  roleId: z.string().uuid().optional(),
  featureId: z.string().uuid().optional(),
  path: z.string().max(255),
  method: z.string().max(10).optional(),
  decision: z.string().max(10),
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

  const accessLog = await accessLogsService.POST.Create(parsed.data);

  return NextResponse.json(accessLog, { status: StatusCodes.CREATED });
}
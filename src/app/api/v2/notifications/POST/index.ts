import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { notificationsService } from '@/v2/services/database/notifications';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid(),
  message: z.string(),
  isRead: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const notification = await notificationsService.POST.Create(parsed.data);

  return NextResponse.json(notification, { status: StatusCodes.CREATED });
}
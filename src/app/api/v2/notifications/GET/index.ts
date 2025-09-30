import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { notificationsService } from '@/v2/services/database/notifications';

export async function GET() {
  
  try {
    const notifications = await notificationsService.GET.All();
    return NextResponse.json({ message: 'Notifications fetched successfully', notifications });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
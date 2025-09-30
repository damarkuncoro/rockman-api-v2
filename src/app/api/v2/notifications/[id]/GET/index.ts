import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { notificationsService } from '@/v2/services/database/notifications';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const notification = await notificationsService.GET.ById(resolvedParams.id);
  if (!notification) {
    return NextResponse.json(
      { message: 'Notification not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(notification, { status: StatusCodes.OK });
}
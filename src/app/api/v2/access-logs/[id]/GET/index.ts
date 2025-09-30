import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { accessLogsService } from '@/v2/services/database/access_logs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const accessLog = await accessLogsService.GET.ById(resolvedParams.id);
  if (!accessLog) {
    return NextResponse.json(
      { message: 'Access Log not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(accessLog, { status: StatusCodes.OK });
}
import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { accessLogsService } from '@/v2/services/database/access_logs';

export async function GET() {
  
  try {
    const accessLogs = await accessLogsService.GET.All();
    return NextResponse.json({ message: 'Access Logs fetched successfully', accessLogs });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
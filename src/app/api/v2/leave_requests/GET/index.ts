import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { leaveRequestsService } from '@/v2/services/database/leave_requests';

export async function GET() {
  
  try {
    const leaveRequests = await leaveRequestsService.GET.All();
    return NextResponse.json({ message: 'Leave Requests fetched successfully', leaveRequests });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
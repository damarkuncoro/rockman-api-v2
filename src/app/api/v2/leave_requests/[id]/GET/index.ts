import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { leaveRequestsService } from '@/v2/services/database/leave_requests';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const leaveRequest = await leaveRequestsService.GET.ById(resolvedParams.id);
  if (!leaveRequest) {
    return NextResponse.json(
      { message: 'Leave Request not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(leaveRequest, { status: StatusCodes.OK });
}
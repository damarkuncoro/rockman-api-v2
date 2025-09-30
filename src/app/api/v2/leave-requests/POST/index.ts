import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { leaveRequestsService } from '@/v2/services/database/leave_requests';

import { z } from 'zod';

const schema = z.object({
  employeeId: z.string().uuid(),
  leaveType: z.enum(['annual', 'sick', 'maternity', 'unpaid']),
  startDate: z.string(),
  endDate: z.string(),
  status: z.enum(['Pending', 'Approved', 'Rejected']),
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

  const leaveRequest = await leaveRequestsService.POST.Create(parsed.data);

  return NextResponse.json(leaveRequest, { status: StatusCodes.CREATED });
}
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { employmentHistoryService } from '@/v2/services/database/employment_history';

import { z } from 'zod';

const schema = z.object({
  employeeId: z.string().uuid(),
  positionId: z.string().uuid(),
  startDate: z.string(),
  endDate: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const employmentHistory = await employmentHistoryService.POST.Create(parsed.data);

  return NextResponse.json(employmentHistory, { status: StatusCodes.CREATED });
}
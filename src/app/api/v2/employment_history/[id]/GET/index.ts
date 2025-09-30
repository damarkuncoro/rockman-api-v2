import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { employmentHistoryService } from '@/v2/services/database/employment_history';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const employmentHistory = await employmentHistoryService.GET.ById(resolvedParams.id);
  if (!employmentHistory) {
    return NextResponse.json(
      { message: 'Employment History not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(employmentHistory, { status: StatusCodes.OK });
}
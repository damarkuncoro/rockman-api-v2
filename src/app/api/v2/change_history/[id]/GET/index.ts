import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { changeHistoryService } from '@/v2/services/database/change_history';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const changeHistory = await changeHistoryService.GET.ById(resolvedParams.id);
  if (!changeHistory) {
    return NextResponse.json(
      { message: 'Change History not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(changeHistory, { status: StatusCodes.OK });
}
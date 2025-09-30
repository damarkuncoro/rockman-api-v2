import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { positionsService } from '@/v2/services/database/positions';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const position = await positionsService.GET.ById(resolvedParams.id);
  if (!position) {
    return NextResponse.json(
      { message: 'Position not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(position, { status: StatusCodes.OK });
}
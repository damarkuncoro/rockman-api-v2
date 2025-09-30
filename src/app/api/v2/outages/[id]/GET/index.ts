import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { outagesService } from '@/v2/services/database/outages';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const outage = await outagesService.GET.ById(resolvedParams.id);
  if (!outage) {
    return NextResponse.json(
      { message: 'Outage not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(outage, { status: StatusCodes.OK });
}
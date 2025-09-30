import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { featuresService } from '@/v2/services/database/features';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const feature = await featuresService.GET.ById(resolvedParams.id);
  if (!feature) {
    return NextResponse.json(
      { message: 'Feature not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(feature, { status: StatusCodes.OK });
}
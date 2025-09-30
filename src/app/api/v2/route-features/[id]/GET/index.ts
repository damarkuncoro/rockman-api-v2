import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { routeFeaturesService } from '@/v2/services/database/route_features';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const routeFeature = await routeFeaturesService.GET.ById(resolvedParams.id);
  if (!routeFeature) {
    return NextResponse.json(
      { message: 'Route Feature not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(routeFeature, { status: StatusCodes.OK });
}
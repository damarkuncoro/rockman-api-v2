import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { roleFeaturesService } from '@/v2/services/database/role_features';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const roleFeature = await roleFeaturesService.GET.ById(resolvedParams.id);
  if (!roleFeature) {
    return NextResponse.json(
      { message: 'Role Feature not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(roleFeature, { status: StatusCodes.OK });
}
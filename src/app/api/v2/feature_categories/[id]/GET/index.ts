import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { featureCategoriesService } from '@/v2/services/database/feature_categories';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const featureCategory = await featureCategoriesService.GET.ById(resolvedParams.id);
  if (!featureCategory) {
    return NextResponse.json(
      { message: 'Feature Category not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(featureCategory, { status: StatusCodes.OK });
}
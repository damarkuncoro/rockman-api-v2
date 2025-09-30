import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { featureCategoriesService } from '@/v2/services/database/feature_categories';

export async function GET() {
  
  try {
    const featureCategories = await featureCategoriesService.GET.All();
    return NextResponse.json({ message: 'Feature Categories fetched successfully', featureCategories });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
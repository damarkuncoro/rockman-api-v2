import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { performanceReviewsService } from '@/v2/services/database/performance_reviews';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const performanceReview = await performanceReviewsService.GET.ById(resolvedParams.id);
  if (!performanceReview) {
    return NextResponse.json(
      { message: 'Performance Review not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(performanceReview, { status: StatusCodes.OK });
}
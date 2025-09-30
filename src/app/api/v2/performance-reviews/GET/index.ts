import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { performanceReviewsService } from '@/v2/services/database/performance_reviews';

export async function GET() {
  
  try {
    const performanceReviews = await performanceReviewsService.GET.All();
    return NextResponse.json({ message: 'Performance Reviews fetched successfully', performanceReviews });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
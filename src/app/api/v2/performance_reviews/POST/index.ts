import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { performanceReviewsService } from '@/v2/services/database/performance_reviews';

import { z } from 'zod';

const schema = z.object({
  employeeId: z.string().uuid(),
  reviewerId: z.string().uuid(),
  reviewDate: z.string(),
  rating: z.enum(['Excellent', 'Good', 'Average', 'Poor']),
  comments: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const performanceReview = await performanceReviewsService.POST.Create(parsed.data);

  return NextResponse.json(performanceReview, { status: StatusCodes.CREATED });
}
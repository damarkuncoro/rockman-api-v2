import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { subscriptionDiscountsService } from '@/v2/services/database/subscription_discounts';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const subscriptionDiscount = await subscriptionDiscountsService.GET.ById(resolvedParams.id);
  if (!subscriptionDiscount) {
    return NextResponse.json(
      { message: 'Subscription Discount not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(subscriptionDiscount, { status: StatusCodes.OK });
}
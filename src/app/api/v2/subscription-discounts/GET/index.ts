import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { subscriptionDiscountsService } from '@/v2/services/database/subscription_discounts';

export async function GET() {
  
  try {
    const subscriptionDiscounts = await subscriptionDiscountsService.GET.All();
    return NextResponse.json({ message: 'Subscription Discounts fetched successfully', subscriptionDiscounts });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
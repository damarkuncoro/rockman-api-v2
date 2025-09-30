import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { subscriptionsService } from '@/v2/services/database/subscriptions';

export async function GET() {
  
  try {
    const subscriptions = await subscriptionsService.GET.All();
    return NextResponse.json({ message: 'Subscriptions fetched successfully', subscriptions });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { loyaltyPointsService } from '@/v2/services/database/loyalty_points';

export async function GET() {
  
  try {
    const loyaltyPoints = await loyaltyPointsService.GET.All();
    return NextResponse.json({ message: 'Loyalty Points fetched successfully', loyaltyPoints });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
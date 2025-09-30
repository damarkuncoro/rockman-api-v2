import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { routeFeaturesService } from '@/v2/services/database/route_features';

export async function GET() {
  
  try {
    const routeFeatures = await routeFeaturesService.GET.All();
    return NextResponse.json({ message: 'Route Features fetched successfully', routeFeatures });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
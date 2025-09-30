import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { roleFeaturesService } from '@/v2/services/database/role_features';

export async function GET() {
  
  try {
    const roleFeatures = await roleFeaturesService.GET.All();
    return NextResponse.json({ message: 'Role Features fetched successfully', roleFeatures });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
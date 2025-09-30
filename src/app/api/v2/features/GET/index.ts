import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { featuresService } from '@/v2/services/database/features';

export async function GET() {
  
  try {
    const features = await featuresService.GET.All();
    return NextResponse.json({ message: 'Features fetched successfully', features });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
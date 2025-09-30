import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { positionsService } from '@/v2/services/database/positions';

export async function GET() {
  
  try {
    const positions = await positionsService.GET.All();
    return NextResponse.json({ message: 'Positions fetched successfully', positions });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
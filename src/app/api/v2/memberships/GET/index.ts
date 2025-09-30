import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { membershipsService } from '@/v2/services/database/memberships';

export async function GET() {
  
  try {
    const memberships = await membershipsService.GET.All();
    return NextResponse.json({ message: 'Memberships fetched successfully', memberships });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
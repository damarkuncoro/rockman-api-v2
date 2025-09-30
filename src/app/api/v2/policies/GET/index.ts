import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { policiesService } from '@/v2/services/database/policies';

export async function GET() {
  
  try {
    const policies = await policiesService.GET.All();
    return NextResponse.json({ message: 'Policies fetched successfully', policies });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
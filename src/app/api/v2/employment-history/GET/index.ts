import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { employmentHistoryService } from '@/v2/services/database/employment_history';

export async function GET() {
  
  try {
    const employmentHistory = await employmentHistoryService.GET.All();
    return NextResponse.json({ message: 'Employment History fetched successfully', employmentHistory });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
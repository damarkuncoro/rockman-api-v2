import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { changeHistoryService } from '@/v2/services/database/change_history';

export async function GET() {
  
  try {
    const changeHistory = await changeHistoryService.GET.All();
    return NextResponse.json({ message: 'Change History fetched successfully', changeHistory });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { payrollsService } from '@/v2/services/database/payrolls';

export async function GET() {
  
  try {
    const payrolls = await payrollsService.GET.All();
    return NextResponse.json({ message: 'Payrolls fetched successfully', payrolls });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
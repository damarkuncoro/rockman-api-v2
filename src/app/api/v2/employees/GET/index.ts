import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { employeesService } from '@/v2/services/database/employees';

export async function GET() {
  
  try {
    const employees = await employeesService.GET.All();
    return NextResponse.json({ message: 'Employees fetched successfully', employees });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
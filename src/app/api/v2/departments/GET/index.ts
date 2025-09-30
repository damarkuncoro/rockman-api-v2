import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { departmentsService } from '@/v2/services/database/departments';

export async function GET() {
  
  try {
    const departments = await departmentsService.GET.All();
    return NextResponse.json({ message: 'Departments fetched successfully', departments });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
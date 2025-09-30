import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { rolesService } from '@/v2/services/database/roles';

export async function GET() {
  
  try {
    const roles = await rolesService.GET.All();
    return NextResponse.json({ message: 'Roles fetched successfully', roles });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
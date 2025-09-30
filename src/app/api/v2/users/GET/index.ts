import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { usersService } from '@/v2/services/database/users';

export async function GET() {
  
  try {
    const users = await usersService.GET.All();
    return NextResponse.json({ message: 'Users fetched successfully', users });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}

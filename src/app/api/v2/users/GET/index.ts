import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { userService } from '@/v2/services/database/users/users.service';

export async function GET() {
  try {
    const users = await userService.GET.All();
    return NextResponse.json({ message: 'Users fetched successfully', users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}

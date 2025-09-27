import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { SERVICE } from '@/v2/services/services';

export async function GET() {
  try {
    const users = await SERVICE.users.GET.All();
    return NextResponse.json({ message: 'Users fetched successfully', users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}

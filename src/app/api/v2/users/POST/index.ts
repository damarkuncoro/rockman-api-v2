import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { SERVICE } from '@/v2/services/services';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newUser = await SERVICE.users.POST.Create(body);
    return NextResponse.json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
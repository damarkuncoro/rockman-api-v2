import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { usersService } from '@/v2/services/database/users';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const user = await usersService.GET.ById(resolvedParams.id);
  if (!user) {
    return NextResponse.json(
      { message: 'Users not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(user, { status: StatusCodes.OK });
}
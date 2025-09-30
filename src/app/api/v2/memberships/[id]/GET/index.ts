import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { membershipsService } from '@/v2/services/database/memberships';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const membership = await membershipsService.GET.ById(resolvedParams.id);
  if (!membership) {
    return NextResponse.json(
      { message: 'Membership not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(membership, { status: StatusCodes.OK });
}
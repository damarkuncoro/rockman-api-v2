import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { rolesService } from '@/v2/services/database/roles';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const role = await rolesService.GET.ById(resolvedParams.id);
  if (!role) {
    return NextResponse.json(
      { message: 'Role not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(role, { status: StatusCodes.OK });
}
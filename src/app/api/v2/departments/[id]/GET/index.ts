import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { departmentsService } from '@/v2/services/database/departments';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const department = await departmentsService.GET.ById(resolvedParams.id);
  if (!department) {
    return NextResponse.json(
      { message: 'Department not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(department, { status: StatusCodes.OK });
}
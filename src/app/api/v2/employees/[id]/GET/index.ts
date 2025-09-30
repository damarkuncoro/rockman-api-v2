import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { employeesService } from '@/v2/services/database/employees';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const employee = await employeesService.GET.ById(resolvedParams.id);
  if (!employee) {
    return NextResponse.json(
      { message: 'Employee not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(employee, { status: StatusCodes.OK });
}
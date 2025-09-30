import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { payrollsService } from '@/v2/services/database/payrolls';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const payroll = await payrollsService.GET.ById(resolvedParams.id);
  if (!payroll) {
    return NextResponse.json(
      { message: 'Payroll not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(payroll, { status: StatusCodes.OK });
}
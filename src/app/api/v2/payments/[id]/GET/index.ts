import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { paymentsService } from '@/v2/services/database/payments';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const payment = await paymentsService.GET.ById(resolvedParams.id);
  if (!payment) {
    return NextResponse.json(
      { message: 'Payment not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(payment, { status: StatusCodes.OK });
}
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { paymentMethodsService } from '@/v2/services/database/payment_methods';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const paymentMethod = await paymentMethodsService.GET.ById(resolvedParams.id);
  if (!paymentMethod) {
    return NextResponse.json(
      { message: 'Payment Method not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(paymentMethod, { status: StatusCodes.OK });
}
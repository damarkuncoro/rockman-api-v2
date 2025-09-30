import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { paymentMethodsService } from '@/v2/services/database/payment_methods';

export async function GET() {
  
  try {
    const paymentMethods = await paymentMethodsService.GET.All();
    return NextResponse.json({ message: 'Payment Methods fetched successfully', paymentMethods });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { discountsService } from '@/v2/services/database/discounts';

export async function GET() {
  
  try {
    const discounts = await discountsService.GET.All();
    return NextResponse.json({ message: 'Discounts fetched successfully', discounts });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
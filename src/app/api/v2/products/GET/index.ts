import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { productsService } from '@/v2/services/database/products';

export async function GET() {
  
  try {
    const products = await productsService.GET.All();
    return NextResponse.json({ message: 'Products fetched successfully', products });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
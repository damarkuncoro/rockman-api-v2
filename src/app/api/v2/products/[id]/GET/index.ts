import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { productsService } from '@/v2/services/database/products';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const product = await productsService.GET.ById(resolvedParams.id);
  if (!product) {
    return NextResponse.json(
      { message: 'Product not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(product, { status: StatusCodes.OK });
}
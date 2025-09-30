import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { discountsService } from '@/v2/services/database/discounts';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const discount = await discountsService.GET.ById(resolvedParams.id);
  if (!discount) {
    return NextResponse.json(
      { message: 'Discount not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(discount, { status: StatusCodes.OK });
}
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { loyaltyPointsService } from '@/v2/services/database/loyalty_points';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const loyaltyPoints = await loyaltyPointsService.GET.ById(resolvedParams.id);
  if (!loyaltyPoints) {
    return NextResponse.json(
      { message: 'Loyalty Points not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(loyaltyPoints, { status: StatusCodes.OK });
}
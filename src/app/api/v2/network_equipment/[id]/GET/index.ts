import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { networkEquipmentService } from '@/v2/services/database/network_equipment';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const networkEquipment = await networkEquipmentService.GET.ById(resolvedParams.id);
  if (!networkEquipment) {
    return NextResponse.json(
      { message: 'Network Equipment not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(networkEquipment, { status: StatusCodes.OK });
}
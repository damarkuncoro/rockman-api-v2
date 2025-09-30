import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { customerEquipmentService } from '@/v2/services/database/customer_equipment';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const customerEquipment = await customerEquipmentService.GET.ById(resolvedParams.id);
  if (!customerEquipment) {
    return NextResponse.json(
      { message: 'Customer Equipment not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(customerEquipment, { status: StatusCodes.OK });
}
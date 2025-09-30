import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { customerEquipmentService } from '@/v2/services/database/customer_equipment';

export async function GET() {
  
  try {
    const customerEquipment = await customerEquipmentService.GET.All();
    return NextResponse.json({ message: 'Customer Equipment fetched successfully', customerEquipment });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
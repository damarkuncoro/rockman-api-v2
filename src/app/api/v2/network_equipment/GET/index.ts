import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { networkEquipmentService } from '@/v2/services/database/network_equipment';

export async function GET() {
  
  try {
    const networkEquipment = await networkEquipmentService.GET.All();
    return NextResponse.json({ message: 'Network Equipment fetched successfully', networkEquipment });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
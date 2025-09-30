import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { networkEquipmentService } from '@/v2/services/database/network_equipment';

import { z } from 'zod';

const schema = z.object({
  serialNumber: z.string().max(255),
  macAddress: z.string().max(255),
  model: z.string().max(255).optional(),
  equipmentType: z.enum(['modem', 'router', 'switch']),
  status: z.enum(['in_stock', 'assigned', 'faulty']),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const networkEquipment = await networkEquipmentService.POST.Create(parsed.data);

  return NextResponse.json(networkEquipment, { status: StatusCodes.CREATED });
}
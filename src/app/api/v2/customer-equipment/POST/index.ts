import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { customerEquipmentService } from '@/v2/services/database/customer_equipment';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid(),
  equipmentId: z.string().uuid(),
  assignedAt: z.string().pipe(z.coerce.date()),
  returnedAt: z.string().pipe(z.coerce.date()).optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const customerEquipment = await customerEquipmentService.POST.Create(parsed.data);

  return NextResponse.json(customerEquipment, { status: StatusCodes.CREATED });
}
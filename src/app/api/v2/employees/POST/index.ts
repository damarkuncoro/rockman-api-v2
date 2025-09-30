import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { employeesService } from '@/v2/services/database/employees';

import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid().optional(),
  firstName: z.string().max(100),
  lastName: z.string().max(100),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']).optional(),
  nationality: z.string().max(100).optional(),
  personalEmail: z.string().max(255).optional(),
  phoneNumber: z.string().max(20).optional(),
  address: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const employee = await employeesService.POST.Create(parsed.data);

  return NextResponse.json(employee, { status: StatusCodes.CREATED });
}
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { payrollsService } from '@/v2/services/database/payrolls';

import { z } from 'zod';

const schema = z.object({
  employeeId: z.string().uuid(),
  payPeriodStart: z.string(),
  payPeriodEnd: z.string(),
  grossSalary: z.string(),
  netSalary: z.string(),
  deductions: z.string().optional(),
  paymentDate: z.string(),
  status: z.enum(['Draft', 'Approved', 'Paid']),
  approvedBy: z.string().uuid().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const payroll = await payrollsService.POST.Create(parsed.data);

  return NextResponse.json(payroll, { status: StatusCodes.CREATED });
}
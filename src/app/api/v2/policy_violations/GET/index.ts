import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { policyViolationsService } from '@/v2/services/database/policy_violations';

export async function GET() {
  
  try {
    const policyViolations = await policyViolationsService.GET.All();
    return NextResponse.json({ message: 'Policy Violations fetched successfully', policyViolations });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
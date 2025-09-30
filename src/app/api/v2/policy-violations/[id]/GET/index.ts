import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { policyViolationsService } from '@/v2/services/database/policy_violations';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const policyViolation = await policyViolationsService.GET.ById(resolvedParams.id);
  if (!policyViolation) {
    return NextResponse.json(
      { message: 'Policy Violation not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(policyViolation, { status: StatusCodes.OK });
}
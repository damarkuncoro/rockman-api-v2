import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { policiesService } from '@/v2/services/database/policies';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const policy = await policiesService.GET.ById(resolvedParams.id);
  if (!policy) {
    return NextResponse.json(
      { message: 'Policy not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(policy, { status: StatusCodes.OK });
}
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { routeFeaturesService } from '@/v2/services/database/route_features';

import { z } from 'zod';

const schema = z.object({
  path: z.string().max(255),
  method: z.string().max(10).optional(),
  featureId: z.string().uuid(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const routeFeature = await routeFeaturesService.POST.Create(parsed.data);

  return NextResponse.json(routeFeature, { status: StatusCodes.CREATED });
}
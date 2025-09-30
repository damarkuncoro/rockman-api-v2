import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { roleFeaturesService } from '@/v2/services/database/role_features';

import { z } from 'zod';

const schema = z.object({
  roleId: z.string().uuid(),
  featureId: z.string().uuid(),
  canCreate: z.boolean().optional(),
  canRead: z.boolean().optional(),
  canUpdate: z.boolean().optional(),
  canDelete: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const roleFeature = await roleFeaturesService.POST.Create(parsed.data);

  return NextResponse.json(roleFeature, { status: StatusCodes.CREATED });
}
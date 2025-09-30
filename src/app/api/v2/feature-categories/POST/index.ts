import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { featureCategoriesService } from '@/v2/services/database/feature_categories';

import { z } from 'zod';

const schema = z.object({
  name: z.string().max(100),
  description: z.string().optional(),
  slug: z.string().max(100),
  color: z.string().max(7).optional(),
  icon: z.string().max(50).optional(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const featureCategory = await featureCategoriesService.POST.Create(parsed.data);

  return NextResponse.json(featureCategory, { status: StatusCodes.CREATED });
}
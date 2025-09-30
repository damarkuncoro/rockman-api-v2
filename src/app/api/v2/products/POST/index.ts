import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { productsService } from '@/v2/services/database/products';

import { z } from 'zod';

const schema = z.object({
  name: z.string().max(100),
  description: z.string().optional(),
  price: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const product = await productsService.POST.Create(parsed.data);

  return NextResponse.json(product, { status: StatusCodes.CREATED });
}
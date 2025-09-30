import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { outagesService } from '@/v2/services/database/outages';

export async function GET() {
  
  try {
    const outages = await outagesService.GET.All();
    return NextResponse.json({ message: 'Outages fetched successfully', outages });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
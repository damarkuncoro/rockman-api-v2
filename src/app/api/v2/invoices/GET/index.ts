import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { invoicesService } from '@/v2/services/database/invoices';

export async function GET() {
  
  try {
    const invoices = await invoicesService.GET.All();
    return NextResponse.json({ message: 'Invoices fetched successfully', invoices });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
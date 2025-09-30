import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { invoiceItemsService } from '@/v2/services/database/invoice_items';

export async function GET() {
  
  try {
    const invoiceItems = await invoiceItemsService.GET.All();
    return NextResponse.json({ message: 'Invoice Items fetched successfully', invoiceItems });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
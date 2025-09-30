import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { invoiceItemsService } from '@/v2/services/database/invoice_items';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const invoiceItem = await invoiceItemsService.GET.ById(resolvedParams.id);
  if (!invoiceItem) {
    return NextResponse.json(
      { message: 'Invoice Item not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(invoiceItem, { status: StatusCodes.OK });
}
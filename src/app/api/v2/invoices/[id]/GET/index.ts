import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { invoicesService } from '@/v2/services/database/invoices';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const invoice = await invoicesService.GET.ById(resolvedParams.id);
  if (!invoice) {
    return NextResponse.json(
      { message: 'Invoice not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(invoice, { status: StatusCodes.OK });
}
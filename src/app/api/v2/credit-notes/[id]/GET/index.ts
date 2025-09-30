import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { creditNotesService } from '@/v2/services/database/credit_notes';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const creditNote = await creditNotesService.GET.ById(resolvedParams.id);
  if (!creditNote) {
    return NextResponse.json(
      { message: 'Credit Note not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(creditNote, { status: StatusCodes.OK });
}
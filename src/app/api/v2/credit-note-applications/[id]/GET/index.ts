import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { creditNoteApplicationsService } from '@/v2/services/database/credit_note_applications';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const creditNoteApplication = await creditNoteApplicationsService.GET.ById(resolvedParams.id);
  if (!creditNoteApplication) {
    return NextResponse.json(
      { message: 'Credit Note Application not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(creditNoteApplication, { status: StatusCodes.OK });
}
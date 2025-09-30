import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { creditNoteApplicationsService } from '@/v2/services/database/credit_note_applications';

export async function GET() {
  
  try {
    const creditNoteApplications = await creditNoteApplicationsService.GET.All();
    return NextResponse.json({ message: 'Credit Note Applications fetched successfully', creditNoteApplications });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
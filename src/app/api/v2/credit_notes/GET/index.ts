import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { creditNotesService } from '@/v2/services/database/credit_notes';

export async function GET() {
  
  try {
    const creditNotes = await creditNotesService.GET.All();
    return NextResponse.json({ message: 'Credit Notes fetched successfully', creditNotes });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
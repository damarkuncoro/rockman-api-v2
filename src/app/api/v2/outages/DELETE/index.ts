import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { outagesService } from '@/v2/services/database/outages';

export async function DELETE(
  request: NextRequest,
) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { message: 'ID parameter is required' },
      { status: StatusCodes.BAD_REQUEST }
    );
  }

  try {
    const success = await outagesService.DELETE.Remove(id);

    if (!success) {
      return NextResponse.json(
        { message: 'Outage not found or could not be deleted' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(
      { message: 'Outage deleted successfully' },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
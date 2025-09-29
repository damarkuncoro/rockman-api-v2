import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { userCustomerService } from '@/v2/services/database/user_customers/user_customers.service';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const deleted = await userCustomerService.DELETE.Remove(resolvedParams.id);
    if (!deleted) {
      return NextResponse.json(
        { message: 'User customer not found' },
        { status: StatusCodes.NOT_FOUND },
      );
    }
    return NextResponse.json({ message: 'User customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting user customer:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
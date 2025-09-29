import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { userCustomerService } from '@/v2/services/database/user_customers/user_customers.service';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userCustomer = await userCustomerService.GET.ById(resolvedParams.id);
    if (!userCustomer) {
      return NextResponse.json(
        { message: 'User customer not found' },
        { status: StatusCodes.NOT_FOUND },
      );
    }
    return NextResponse.json(userCustomer);
  } catch (error) {
    console.error('Error fetching user customer:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}

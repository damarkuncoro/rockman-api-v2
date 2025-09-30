import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { userCustomerService } from '@/v2/services/database/user_customers/user_customers.service';
import { insertUserCustomerSchema } from '@/db/schema/user_customers/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = insertUserCustomerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(parsed.error, {
        status: StatusCodes.BAD_REQUEST,
      });
    }

    const newUserCustomer = await userCustomerService.POST.Create(parsed.data);
    return NextResponse.json(newUserCustomer, { status: StatusCodes.CREATED });
  } catch (error) {
    console.error('Error creating user customer:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
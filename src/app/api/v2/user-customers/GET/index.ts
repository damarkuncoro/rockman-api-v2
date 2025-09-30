import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { userCustomerService } from '@/v2/services/database/user_customers/';


export async function GET() {
    try {
        const userCustomers = await userCustomerService.GET.All();
        return NextResponse.json({ message: 'User customers fetched successfully', userCustomers });
    } catch (error) {
        console.error('Error fetching user customers:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: StatusCodes.INTERNAL_SERVER_ERROR },
        );
    }
}

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { StatusCodes } from 'http-status-codes';

type ServiceMethod<T> = () => Promise<T[]>


export function createGetHandler<T>(
    serviceMethod: ServiceMethod<T>,
    resourceName: string) {

    return async function GET() {
        try {
            const data = await serviceMethod();
            return NextResponse.json(
                { message: `${resourceName} fetched successfully`, data },
                { status: StatusCodes.OK }
            );
        } catch (error) {
            console.error(`Error fetching ${resourceName}:`, error);
            return NextResponse.json(
                { message: 'Internal Server Error' },
                { status: StatusCodes.INTERNAL_SERVER_ERROR }
            );
        }
    };
}



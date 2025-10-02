import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

type ByIdMethod<T> = (id: string) => Promise<T | null>;

export function createGetByIdHandler<T>(
  serviceMethod: ByIdMethod<T>,
  resourceName: string
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async function GET(request: Request, context: any) {
    try {
      // Pakai assertion aman → langsung pastikan id ada
      const { id } = await context.params as { id?: string | string[] };

      const resolvedId = Array.isArray(id) ? id[0] : id;

      if (!resolvedId) {
        return NextResponse.json(
          { message: `${resourceName} ID is required` },
          { status: StatusCodes.BAD_REQUEST }
        );
      }

      const data = await serviceMethod(resolvedId);

      if (!data) {
        return NextResponse.json(
          { message: `${resourceName} not found` },
          { status: StatusCodes.NOT_FOUND }
        );
      }

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

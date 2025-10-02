import { NextResponse, NextRequest } from 'next/server';
import { StatusCodes } from 'http-status-codes';

// Helper type untuk context params (generic)
type RouteContext<T extends Record<string, string>> = {
  params: T;
};

type ByParamsMethod<T, P extends Record<string, string>> = (params: P) => Promise<T | null>;

export function createGetByParamsHandler<
  T,
  P extends Record<string, string>
>(
  serviceMethod: ByParamsMethod<T, P>,
  resourceName: string
) {
  return async function GET(
    request: NextRequest,
    context: RouteContext<P>
  ) {
    try {
      const data = await serviceMethod(context.params);

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

import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "secret123";

export async function authenticate(req: NextRequest): Promise<JwtPayload | null> {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) return null;

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;

    return decoded;
  } catch {
    return null;
  }
}

// Tipe khusus untuk context API
export interface ApiContext<TParams extends Record<string, string> = Record<string, string>> {
  params: TParams;
}

// Tipe handler API (harus return NextResponse)
export type ApiHandler<TParams extends Record<string, string> = Record<string, string>> = (
  req: NextRequest,
  context: ApiContext<TParams>
) => Promise<NextResponse>;

/**
 * Middleware autentikasi untuk endpoint API
 */
export const auth = {
  required:
    <TParams extends Record<string, string>>(handler: ApiHandler<TParams>): ApiHandler<TParams> =>
    async (req: NextRequest, context: ApiContext<TParams>) => {
      const user = await authenticate(req);

      if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      // lanjut ke handler
      return handler(req, context);
    },
};

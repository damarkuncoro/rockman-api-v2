import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { SERVICE } from "@/v2/services/services";
import { updateUserAbacSchema } from "@/db/schema/users/validations";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await SERVICE.users.GET.ById(params.id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    return NextResponse.json({ message: "User fetched successfully", user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { SERVICE } from "@/v2/services/services";
import { updateUserAbacSchema } from "@/db/schema/users/validations";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const validation = updateUserAbacSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid request body", errors: validation.error.flatten() },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const updatedUser = await SERVICE.users.PUT.Update(params.id, body);
    return NextResponse.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}

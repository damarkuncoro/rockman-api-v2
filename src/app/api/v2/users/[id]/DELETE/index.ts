import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { SERVICE } from "@/v2/services/services";



export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await SERVICE.users.DELETE.Remove(params.id);
        return NextResponse.json(
            { message: "User deleted successfully" },
            { status: StatusCodes.NO_CONTENT }
        );
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}
import { NextResponse } from "next/server";
import { customersService } from "@/v2/services/database/customers";
import { StatusCodes } from "http-status-codes";

interface IParams {
  id: string;
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
  try {
    const { id } = params;
    const success = await customersService.DELETE.Remove(id);

    if (!success) {
      return NextResponse.json(
        {
          message: "Customer not found or failed to delete",
        },
        {
          status: StatusCodes.NOT_FOUND,
        }
      );
    }

    return new NextResponse(null, { status: StatusCodes.NO_CONTENT });
  } catch (error) {
    console.error("Failed to delete customer:", error);
    return NextResponse.json(
      {
        message: "Failed to delete customer",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
import { NextResponse } from "next/server";
import { customersService } from "@/v2/services/database/customers";
import { StatusCodes } from "http-status-codes";

interface IParams {
  id: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  try {
    const { id } = params;
    const customer = await customersService.GET.ById(id);

    if (!customer) {
      return NextResponse.json(
        {
          message: "Customer not found",
        },
        {
          status: StatusCodes.NOT_FOUND,
        }
      );
    }

    return NextResponse.json({
      message: "Successfully retrieved customer",
      data: customer,
    });
  } catch (error) {
    console.error("Failed to retrieve customer:", error);
    return NextResponse.json(
      {
        message: "Failed to retrieve customer",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
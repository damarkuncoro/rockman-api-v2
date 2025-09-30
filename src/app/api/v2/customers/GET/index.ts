import { NextResponse } from "next/server";
import { customersService } from "@/v2/services/database/customers";
import { StatusCodes } from "http-status-codes";

export async function GET() {
  try {
    const customers = await customersService.GET.All();

    return NextResponse.json({
      message: "Successfully retrieved customers",
      customers,
    });
  } catch (error) {
    console.error("Failed to retrieve customers:", error);
    return NextResponse.json(
      {
        message: "Failed to retrieve customers",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
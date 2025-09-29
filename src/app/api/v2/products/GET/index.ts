import { NextResponse } from "next/server";
import { productsService } from "@/v2/services/database/products";
import { StatusCodes } from "http-status-codes";

export async function GET() {
  try {
    const products = await productsService.GET.All();

    return NextResponse.json({
      message: "Successfully retrieved products",
      data: products,
    });
  } catch (error) {
    console.error("Failed to retrieve products:", error);
    return NextResponse.json(
      {
        message: "Failed to retrieve products",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
import { NextResponse } from "next/server";
import { productsService } from "@/v2/services/database/products";
import { StatusCodes } from "http-status-codes";

interface IParams {
  id: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  try {
    const { id } = params;
    const product = await productsService.GET.ById(id);

    if (!product) {
      return NextResponse.json(
        {
          message: "Product not found",
        },
        {
          status: StatusCodes.NOT_FOUND,
        }
      );
    }

    return NextResponse.json({
      message: "Successfully retrieved product",
      data: product,
    });
  } catch (error) {
    console.error("Failed to retrieve product:", error);
    return NextResponse.json(
      {
        message: "Failed to retrieve product",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
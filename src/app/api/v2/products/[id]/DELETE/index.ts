import { NextResponse } from "next/server";
import { productsService } from "@/v2/services/database/products";
import { StatusCodes } from "http-status-codes";

interface IParams {
  id: string;
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
  try {
    const { id } = params;
    const success = await productsService.DELETE.Remove(id);

    if (!success) {
      return NextResponse.json(
        {
          message: "Product not found or failed to delete",
        },
        {
          status: StatusCodes.NOT_FOUND,
        }
      );
    }

    return new NextResponse(null, { status: StatusCodes.NO_CONTENT });
  } catch (error) {
    console.error("Failed to delete product:", error);
    return NextResponse.json(
      {
        message: "Failed to delete product",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
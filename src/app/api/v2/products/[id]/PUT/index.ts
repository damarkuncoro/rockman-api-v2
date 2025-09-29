import { NextResponse } from "next/server";
import { productsService } from "@/v2/services/database/products";
import { StatusCodes } from "http-status-codes";
import { z, ZodError } from "zod";
import { productApiSchema } from "@/db/schema/products/validations";

interface IParams {
  id: string;
}

// For PUT, all fields are optional
const partialProductApiSchema = productApiSchema.partial();
type TPartialProductApi = z.infer<typeof partialProductApiSchema>;

export async function PUT(request: Request, { params }: { params: IParams }) {
  try {
    const { id } = params;
    const body = (await request.json()) as TPartialProductApi;

    const validatedData = partialProductApiSchema.parse(body);

    // Convert price to string if it exists
    const updateData: Record<string, unknown> = { ...validatedData };
    if (validatedData.price !== undefined) {
      updateData.price = String(validatedData.price);
    }

    const updatedProduct = await productsService.PUT.Update(id, updateData);

    if (!updatedProduct) {
      return NextResponse.json(
        {
          message: "Product not found or failed to update",
        },
        {
          status: StatusCodes.NOT_FOUND,
        }
      );
    }

    return NextResponse.json({
      message: "Successfully updated product",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Failed to update product:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: error.issues,
        },
        {
          status: StatusCodes.BAD_REQUEST,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Failed to update product",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
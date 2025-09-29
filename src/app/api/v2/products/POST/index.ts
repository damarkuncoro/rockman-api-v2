import { NextResponse } from "next/server";
import { productsService } from "@/v2/services/database/products";
import { StatusCodes } from "http-status-codes";
import { z, ZodError } from "zod";
import { productApiSchema } from "@/db/schema/products/validations";

type TProductApi = z.infer<typeof productApiSchema>;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TProductApi;

    const validatedData = productApiSchema.parse(body);

    const newProductData = {
      ...validatedData,
      price: String(validatedData.price),
    };

    const newProduct = await productsService.POST.Create(newProductData);

    return NextResponse.json(
      {
        message: "Successfully created product",
        data: newProduct,
      },
      {
        status: StatusCodes.CREATED,
      }
    );
  } catch (error) {
    console.error("Failed to create product:", error);

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
        message: "Failed to create product",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
import { NextResponse } from "next/server";
import { customersService } from "@/v2/services/database/customers";
import { StatusCodes } from "http-status-codes";
import { z, ZodError } from "zod";
import { customerApiSchema } from "@/db/schema/customers/validations";

interface IParams {
  id: string;
}

const partialCustomerApiSchema = customerApiSchema.partial();
type TPartialCustomerApi = z.infer<typeof partialCustomerApiSchema>;

export async function PUT(request: Request, { params }: { params: IParams }) {
  try {
    const { id } = params;
    const body = (await request.json()) as TPartialCustomerApi;

    const validatedData = partialCustomerApiSchema.parse(body);

    const updateData = {
      ...validatedData,
      customerSince: validatedData.customerSince
        ? validatedData.customerSince.toISOString().split("T")[0]
        : undefined,
    };

    const updatedCustomer = await customersService.PUT.Update(id, updateData);

    if (!updatedCustomer) {
      return NextResponse.json(
        {
          message: "Customer not found or failed to update",
        },
        {
          status: StatusCodes.NOT_FOUND,
        }
      );
    }

    return NextResponse.json({
      message: "Successfully updated customer",
      data: updatedCustomer,
    });
  } catch (error) {
    console.error("Failed to update customer:", error);

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
        message: "Failed to update customer",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
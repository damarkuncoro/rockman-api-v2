import { NextResponse } from "next/server";
import { customersService } from "@/v2/services/database/customers";
import { StatusCodes } from "http-status-codes";
import { z, ZodError } from "zod";
import { customerApiSchema } from "@/db/schema/customers/validations";

type TCustomerApi = z.infer<typeof customerApiSchema>;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TCustomerApi;

    const validatedData = customerApiSchema.parse(body);

    const newCustomerData = {
      ...validatedData,
      customerSince: validatedData.customerSince
        ? validatedData.customerSince.toISOString().split("T")[0]
        : undefined,
    };

    const newCustomer = await customersService.POST.Create(newCustomerData);

    return NextResponse.json(
      {
        message: "Successfully created customer",
        data: newCustomer,
      },
      {
        status: StatusCodes.CREATED,
      }
    );
  } catch (error) {
    console.error("Failed to create customer:", error);

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
        message: "Failed to create customer",
      },
      {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
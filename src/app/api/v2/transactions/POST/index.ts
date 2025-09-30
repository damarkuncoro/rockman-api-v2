/**
 * POST handler untuk /api/v2/transactions
 * 
 * Endpoint untuk membuat transaksi baru
 */

import { NextRequest, NextResponse } from 'next/server';
import { transactionsService } from '@/v2/services/database/transactions';
import { usersService } from '@/v2/services/database/users';
import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';

// Validasi input
const transactionSchema = z.object({
  userId: z.string().uuid(),
  amount: z.number().positive(),
  description: z.string().min(3).max(255),
  status: z.enum(['pending', 'completed', 'failed', 'refunded']),
  paymentMethod: z.string().optional(),
  referenceId: z.string().optional(),
  paymentId: z.string().uuid()
});

export async function POST(request: NextRequest) {
  try {
    // Parse body request
    const body = await request.json();
    
    // Validasi input
    const validatedData = transactionSchema.parse(body);
    
    // Periksa apakah user ada
    const user = await usersService.GET.ById(validatedData.userId);
    
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'User not found'
      }, { status: StatusCodes.NOT_FOUND });
    }
    
    // Buat transaksi baru menggunakan service
    const newTransaction = await transactionsService.POST.Create({
      userId: validatedData.userId,
      amount: String(validatedData.amount),
      status: validatedData.status.charAt(0).toUpperCase() + validatedData.status.slice(1) as "Pending" | "Failed" | "Completed" | "Refunded",
      paymentMethod: validatedData.paymentMethod,
      paymentId: validatedData.paymentId
      // description dan referenceId dihapus karena tidak ada di tipe data service
    });
    
    // Return response
    return NextResponse.json({
      success: true,
      data: newTransaction
    }, { status: StatusCodes.CREATED });
  } catch (error) {
      console.error('Error creating transaction:', error);
      
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return NextResponse.json({
          success: false,
          error: 'Validation failed',
          issues: (error as z.ZodError).format()
        }, { status: StatusCodes.BAD_REQUEST });
      }
      
      // Handle other errors
      return NextResponse.json({
        success: false,
        error: 'Failed to create transaction'
      }, { status: StatusCodes.INTERNAL_SERVER_ERROR });
    }
  }
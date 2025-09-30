/**
 * POST handler untuk /api/v2/ticket_replies
 * 
 * Endpoint untuk membuat balasan ticket baru
 */

import { NextRequest, NextResponse } from 'next/server';
import { ticketRepliesService } from '@/v2/services/database/ticket_replies';
import { ticketsService } from '@/v2/services/database/tickets';
import { z } from 'zod';

// Validasi input
const ticketReplySchema = z.object({
  ticketId: z.string().uuid(),
  userId: z.string().uuid(),
  content: z.string().min(3),
  isInternal: z.boolean().optional().default(false)
});

export async function POST(request: NextRequest) {
  try {
    // Parse body request
    const body = await request.json();
    
    // Validasi input
    const validatedData = ticketReplySchema.parse(body);
    
    // Periksa apakah ticket ada menggunakan service
    const ticketExists = await ticketsService.GET.ById(validatedData.ticketId);
    
    if (!ticketExists) {
      return NextResponse.json({
        success: false,
        error: 'Ticket not found'
      }, { status: 404 });
    }
    
    // Gunakan service untuk membuat reply baru
    const newReply = await ticketRepliesService.POST.Create({
      ticketId: validatedData.ticketId,
      userId: validatedData.userId,
      message: validatedData.content
    });
    
    // Return response
    return NextResponse.json({
      success: true,
      data: newReply
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating ticket reply:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation failed',
        issues: (error as z.ZodError).format()
      }, { status: 400 });
    }
    
    // Handle other errors
    return NextResponse.json({
      success: false,
      error: 'Failed to create ticket reply'
    }, { status: 500 });
  }
}
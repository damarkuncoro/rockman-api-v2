/**
 * GET handler untuk /api/v2/tickets/[id]
 * 
 * Endpoint untuk mendapatkan detail ticket berdasarkan ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { ticketsService } from '@/v2/services/database/tickets';
import { ticketRepliesService } from '@/v2/services/database/ticket_replies';
import { StatusCodes } from 'http-status-codes';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    
    // Ambil ticket berdasarkan ID menggunakan service layer
    const ticket = await ticketsService.GET.ById(id);
    
    if (!ticket) {
      return NextResponse.json(
        { success: false, error: 'Ticket not found' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    // Ambil replies untuk ticket ini menggunakan service layer
    const replies = await ticketRepliesService.GET.All();
    
    // Buat response
    return NextResponse.json({
      success: true,
      data: {
        ...ticket,
        replies
      }
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching ticket:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch ticket' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
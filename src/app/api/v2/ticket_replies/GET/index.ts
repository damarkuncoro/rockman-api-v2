/**
 * GET handler untuk /api/v2/ticket_replies
 * 
 * Endpoint untuk mendapatkan daftar ticket_replies berdasarkan ticketId
 */

import { NextRequest, NextResponse } from 'next/server';
import { ticketRepliesService } from '@/v2/services/database/ticket_replies';

export async function GET(request: NextRequest) {
  try {
    // Ambil parameter query
    const searchParams = request.nextUrl.searchParams;
    const ticketId = searchParams.get('ticketId');
    
    // Validasi parameter
    if (!ticketId) {
      return NextResponse.json(
        { success: false, error: 'ticketId is required' },
        { status: 400 }
      );
    }
    
    // Gunakan service untuk mengambil data
    const replies = await ticketRepliesService.GET.All();
    
    // Buat response
    return NextResponse.json({
      success: true,
      data: replies
    });
  } catch (error) {
    console.error('Error fetching ticket replies:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch ticket replies' },
      { status: 500 }
    );
  }
}
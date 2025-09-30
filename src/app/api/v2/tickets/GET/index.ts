/**
 * GET handler untuk /api/v2/tickets
 * 
 * Endpoint untuk mendapatkan daftar tickets
 */

import { NextRequest, NextResponse } from 'next/server';
import { ticketsService } from '@/v2/services/database/tickets';

export async function GET(request: NextRequest) {
  try {
    // Ambil parameter query
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const category = searchParams.get('category');
    
    // Buat filter untuk service
    const filter: Record<string, string | number> = {};
    
    if (status) {
      filter.status = status;
    }
    
    if (priority) {
      filter.priority = priority;
    }
    
    if (category) {
      filter.category = category;
    }
    
    // Gunakan service untuk mengambil data
    const ticketsList = await ticketsService.GET.All();
    
    // Hitung total untuk pagination
    const totalCount = ticketsList.length;
    
    // Buat response
    return NextResponse.json({
      success: true,
      data: ticketsList,
      meta: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tickets' },
      { status: 500 }
    );
  }
}
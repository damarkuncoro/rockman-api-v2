/**
 * GET handler untuk /api/v2/users/[id]/tickets
 * 
 * Endpoint untuk mendapatkan daftar tickets berdasarkan user ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { ticketsService } from '@/v2/services/database/tickets';
import { usersService } from '@/v2/services/database/users';
import { StatusCodes } from 'http-status-codes';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id;
    
    // Validasi user ID
    const user = await usersService.GET.ById(userId);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    // Ambil parameter query untuk filtering dan pagination
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const category = searchParams.get('category');
    
    // Buat filter untuk service
    const filter: Record<string, string | number> = {
      userId: userId
    };
    
    if (status) {
      filter.status = status;
    }
    
    if (priority) {
      filter.priority = priority;
    }
    
    if (category) {
      filter.category = category;
    }
    
    // Ambil semua tickets dan filter berdasarkan user ID
    const allTickets = await ticketsService.GET.All();
    const tickets = allTickets.filter(ticket => ticket.userId === userId);
    
    // Terapkan filter tambahan jika ada
    let filteredTickets = [...tickets];
    
    if (status) {
      filteredTickets = filteredTickets.filter(ticket => ticket.status === status);
    }
    
    if (priority) {
      filteredTickets = filteredTickets.filter(ticket => ticket.priority === priority);
    }
    
    if (category) {
      filteredTickets = filteredTickets.filter(ticket => ticket.category === category);
    }
    
    // Terapkan pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    // Hitung total untuk pagination
    const totalCount = filteredTickets.length;
    
    // Buat response
    return NextResponse.json({
      success: true,
      data: filteredTickets.slice(startIndex, endIndex),
      meta: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit)
      }
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching tickets for user:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tickets' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
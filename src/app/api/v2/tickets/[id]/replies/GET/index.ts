import { NextRequest, NextResponse } from 'next/server';
import { ticketRepliesService } from '@/v2/services/database/ticket_replies';



/**
 * Handler untuk mendapatkan daftar balasan tiket
 * Mendukung paginasi dengan parameter query 'page' dan 'limit'
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const ticketId = resolvedParams.id;
    
    // Validasi ID tiket
    if (!ticketId) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID tiket diperlukan',
          data: null,
        },
        { status: 400 }
      );
    }

    // Mendapatkan parameter query
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Validasi parameter paginasi
    if (isNaN(page) || page < 1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Parameter page harus berupa angka positif',
          data: null,
        },
        { status: 400 }
      );
    }

    if (isNaN(limit) || limit < 1 || limit > 100) {
      return NextResponse.json(
        {
          success: false,
          message: 'Parameter limit harus berupa angka antara 1 dan 100',
          data: null,
        },
        { status: 400 }
      );
    }

    // Mendapatkan balasan tiket dengan paginasi
    const allTicketReplies = await ticketRepliesService.GET.All();
    const ticketReplies = allTicketReplies.filter(reply => reply.ticketId === ticketId);
    const totalCount = await ticketRepliesService.GET.Count({ ticketId });

    // Menghitung metadata paginasi
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json(
      {
        success: true,
        message: 'Balasan tiket berhasil ditemukan',
        data: ticketReplies,
        meta: {
          pagination: {
            page,
            limit,
            totalCount,
            totalPages,
            hasNextPage,
            hasPrevPage,
          },
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error getting ticket replies:', error);
    const errorMessage = error instanceof Error ? error.message : 'Terjadi kesalahan saat mengambil data balasan tiket';
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        data: null,
      },
      { status: 500 }
    );
  }
}
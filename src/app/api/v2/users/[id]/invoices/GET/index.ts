/**
 * GET handler untuk /api/v2/users/[id]/invoices
 * 
 * Endpoint untuk mendapatkan daftar faktur berdasarkan user ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { invoicesService } from '@/v2/services/database/invoices';
import { usersService } from '@/v2/services/database/users';

/**
 * GET handler untuk mengambil faktur berdasarkan user ID
 * 
 * @param request - NextRequest object
 * @param params - Parameter dari URL (id)
 * @returns NextResponse dengan data faktur atau error
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;

    // Validasi user ID
    const user = await usersService.GET.ById(userId);
    if (!user) {
      return NextResponse.json(
        { error: "User tidak ditemukan" },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    // Ambil parameter query untuk pagination dan filter
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Ambil semua faktur dan filter berdasarkan user ID
    const allInvoices = await invoicesService.GET.All();
    let userInvoices = allInvoices.filter(invoice => invoice.userId === userId);
    
    // Filter berdasarkan status jika ada
    if (status) {
      userInvoices = userInvoices.filter(invoice => invoice.status === status);
    }
    
    // Filter berdasarkan tanggal jika ada
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      userInvoices = userInvoices.filter(invoice => {
        const invoiceDate = new Date(invoice.createdAt);
        return invoiceDate >= start && invoiceDate <= end;
      });
    }

    // Implementasi pagination di level aplikasi
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    // Hitung total untuk pagination
    const totalCount = userInvoices.length;

    // Buat response
    return NextResponse.json({
      success: true,
      data: userInvoices.slice(startIndex, endIndex),
      meta: {
        pagination: {
          page,
          limit,
          total: totalCount,
          totalPages: Math.ceil(totalCount / limit)
        },
        filters: {
          status: status || 'all',
          dateRange: startDate && endDate ? { startDate, endDate } : null
        }
      }
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error("Error fetching user invoices:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data faktur" },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
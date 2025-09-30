/**
 * Route handler untuk /api/v2/users/[id]/tickets
 * 
 * Endpoint untuk mendapatkan daftar tickets berdasarkan user ID
 * 
 * Mengikuti prinsip:
 * - SRP: Hanya menangani operasi GET tickets by user ID
 * - DRY: Reusable endpoint untuk kebutuhan ticket data
 * - KISS: Interface API yang sederhana
 * - SOLID: Dependency injection dan separation of concerns
 */

import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { ticketsService } from "@/v2/services/database/tickets";
import { usersService } from "@/v2/services/database/users";

/**
 * GET handler untuk mengambil tickets berdasarkan user ID
 * 
 * @param request - NextRequest object
 * @param params - Parameter dari URL (id)
 * @returns NextResponse dengan data tickets atau error
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

    // Ambil semua tickets dan filter berdasarkan user ID
    const allTickets = await ticketsService.GET.All();
    const userTickets = allTickets.filter(ticket => ticket.userId === userId);

    // Buat response
    return NextResponse.json({
      success: true,
      data: userTickets
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching tickets for user:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tickets' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
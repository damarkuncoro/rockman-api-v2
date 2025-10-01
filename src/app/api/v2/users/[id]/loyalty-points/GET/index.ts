import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { loyaltyPointsService } from '@/v2/services/database/loyalty_points';
import { usersService } from '@/v2/services/database/users';



/**
 * Handler untuk mendapatkan semua poin loyalitas dari pengguna tertentu
 * @param request - Request dari client
 * @param context - Konteks request yang berisi parameter
 * @returns Response dengan data poin loyalitas pengguna
 */
export async function GET(request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;

    // Validasi user ID
    const user = await usersService.GET.ById(userId);
    if (!user) {
      return NextResponse.json(
        { message: 'Pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    // Menggunakan service layer untuk mendapatkan semua poin loyalitas
    const allPoints = await loyaltyPointsService.GET.All();
    const userPoints = allPoints.filter(point => point.userId === userId);


    if (!userPoints || userPoints.length === 0) {
      return NextResponse.json(
        { message: 'Tidak ada poin loyalitas ditemukan untuk pengguna ini', points: [] },
        { status: StatusCodes.OK }
      );
    }

    // Menghitung total poin
    const totalPoints = userPoints.reduce((sum, point) => sum + Number(point.points), 0);

    return NextResponse.json({
      message: 'Poin loyalitas pengguna berhasil diambil',
      points: userPoints,
      totalPoints
    }, { status: StatusCodes.OK });
  } catch {
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil data poin loyalitas' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}

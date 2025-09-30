/**
 * Handler GET untuk endpoint /users/[id]/devices
 * Mengambil perangkat pengguna berdasarkan ID
 */
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { userDevicesService } from '@/v2/services/database/user_devices';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;
    
    if (!userId) {
      return NextResponse.json(
        { message: 'ID pengguna tidak valid' },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    // Mengambil perangkat pengguna dari service
    const userDevices = await userDevicesService.GET.All();
    
    if (!userDevices || userDevices.length === 0) {
      return NextResponse.json(
        { message: 'Perangkat pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(userDevices, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error saat mengambil perangkat pengguna:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil perangkat pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { customerEquipmentService } from '@/v2/services/database/customer_equipment';

/**
 * Handler untuk mendapatkan daftar equipment pengguna berdasarkan ID
 */
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

    // Mengambil semua data customer equipment
    const allEquipment = await customerEquipmentService.GET.All();
    
    // Filter berdasarkan user ID
    const userEquipment = allEquipment.filter(item => item.userId === userId);
    
    return NextResponse.json({ 
      message: 'Equipment pengguna berhasil diambil', 
      data: userEquipment 
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching user equipment:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
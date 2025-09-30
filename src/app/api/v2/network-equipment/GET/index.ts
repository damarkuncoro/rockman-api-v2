import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { networkEquipmentService } from '@/v2/services/database/network_equipment';

/**
 * Handler untuk mendapatkan daftar network equipment
 * Mendukung filter berdasarkan status dan equipment_type
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const equipmentType = searchParams.get('equipment_type');
    const search = searchParams.get('search');

    // Mengambil semua data network equipment menggunakan service layer
    const allEquipment = await networkEquipmentService.GET.All();
    
    // Menerapkan filter pada hasil yang sudah didapatkan
    let result = allEquipment;
    
    // Filter berdasarkan status jika ada
    if (status && ['in_stock', 'assigned', 'faulty'].includes(status)) {
      result = result.filter(item => item.status === status);
    }
    
    // Filter berdasarkan equipment_type jika ada
    if (equipmentType && ['modem', 'router', 'switch'].includes(equipmentType)) {
      result = result.filter(item => item.equipmentType === equipmentType);
    }
    
    // Filter pencarian berdasarkan serial number
    if (search) {
      result = result.filter(item => 
        item.serialNumber.toLowerCase().includes(search.toLowerCase())
      );
    }

    return NextResponse.json({ 
      message: 'Network equipment fetched successfully', 
      data: result 
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching network equipment:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
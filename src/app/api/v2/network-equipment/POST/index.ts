import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { networkEquipmentService } from '@/v2/services/database/network_equipment';
import { z } from 'zod';

/**
 * Schema validasi untuk pembuatan network equipment baru
 */
const schema = z.object({
  serialNumber: z.string().max(255).nonempty('Serial number diperlukan'),
  macAddress: z.string().max(255).nonempty('MAC address diperlukan'),
  model: z.string().max(255).optional(),
  equipmentType: z.enum(['modem', 'router', 'switch'], {
    message: 'Equipment type harus salah satu dari: modem, router, switch'
  }),
  status: z.enum(['in_stock', 'assigned', 'faulty'], {
    message: 'Status harus salah satu dari: in_stock, assigned, faulty'
  }),
});

/**
 * Handler untuk membuat network equipment baru
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validasi input
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { 
          message: 'Validasi gagal', 
          errors: parsed.error.format() 
        }, 
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    // Cek apakah serial number atau MAC address sudah ada
    // Menggunakan GET.All() dan filter manual karena Where tidak tersedia
    const allEquipment = await networkEquipmentService.GET.All();
    
    const existingBySerial = allEquipment.filter(
      item => item.serialNumber === parsed.data.serialNumber
    );

    if (existingBySerial.length > 0) {
      return NextResponse.json(
        { message: 'Serial number sudah digunakan' },
        { status: StatusCodes.CONFLICT }
      );
    }

    const existingByMac = allEquipment.filter(
      item => item.macAddress === parsed.data.macAddress
    );

    if (existingByMac.length > 0) {
      return NextResponse.json(
        { message: 'MAC address sudah digunakan' },
        { status: StatusCodes.CONFLICT }
      );
    }

    // Buat network equipment baru
    const networkEquipment = await networkEquipmentService.POST.Create(parsed.data);

    return NextResponse.json(
      { 
        message: 'Network equipment berhasil dibuat', 
        data: networkEquipment 
      }, 
      { status: StatusCodes.CREATED }
    );
  } catch (error) {
    console.error('Error creating network equipment:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { customerEquipmentService } from '@/v2/services/database/customer_equipment';
import { networkEquipmentService } from '@/v2/services/database/network_equipment';
import { z } from 'zod';

/**
 * Schema validasi untuk menambahkan equipment ke pengguna
 */
const schema = z.object({
  equipmentId: z.string().uuid('ID peralatan harus berupa UUID yang valid'),
});

/**
 * Handler untuk menambahkan equipment ke pengguna
 */
export async function POST(
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
    
    const { equipmentId } = parsed.data;
    
    // Verifikasi equipment ada
    const allEquipment = await networkEquipmentService.GET.All();
    const equipment = allEquipment.find(item => item.id === equipmentId);
    
    if (!equipment) {
      return NextResponse.json(
        { message: 'Equipment tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    // Verifikasi equipment belum diassign ke pengguna lain
    const allCustomerEquipment = await customerEquipmentService.GET.All();
    const existingAssignment = allCustomerEquipment.find(
      item => item.equipmentId === equipmentId && !item.returnedAt
    );
    
    if (existingAssignment) {
      return NextResponse.json(
        { message: 'Equipment sudah diassign ke pengguna lain' },
        { status: StatusCodes.CONFLICT }
      );
    }
    
    // Buat assignment baru
    const customerEquipment = await customerEquipmentService.POST.Create({
      userId,
      equipmentId,
      assignedAt: new Date(),
    });
    
    return NextResponse.json(
      { 
        message: 'Equipment berhasil ditambahkan ke pengguna', 
        data: customerEquipment 
      }, 
      { status: StatusCodes.CREATED }
    );
  } catch (error) {
    console.error('Error adding equipment to user:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
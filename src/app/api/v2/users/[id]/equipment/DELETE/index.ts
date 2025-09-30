import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { customerEquipmentService } from '@/v2/services/database/customer_equipment';
import { z } from 'zod';

/**
 * Schema validasi untuk menghapus equipment dari pengguna
 */
const schema = z.object({
  equipmentId: z.string().uuid('ID peralatan harus berupa UUID yang valid'),
});

/**
 * Handler untuk menghapus equipment dari pengguna
 */
export async function DELETE(
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

    // Mendapatkan equipmentId dari query params
    const { searchParams } = new URL(request.url);
    const equipmentId = searchParams.get('equipmentId');
    
    if (!equipmentId) {
      return NextResponse.json(
        { message: 'ID equipment diperlukan' },
        { status: StatusCodes.BAD_REQUEST }
      );
    }
    
    // Validasi equipmentId
    const parsed = schema.safeParse({ equipmentId });
    
    if (!parsed.success) {
      return NextResponse.json(
        { 
          message: 'Validasi gagal', 
          errors: parsed.error.format() 
        }, 
        { status: StatusCodes.BAD_REQUEST }
      );
    }
    
    // Verifikasi equipment dimiliki oleh pengguna
    const allCustomerEquipment = await customerEquipmentService.GET.All();
    const existingAssignment = allCustomerEquipment.find(
      item => item.equipmentId === equipmentId && 
             item.userId === userId && 
             !item.returnedAt
    );
    
    if (!existingAssignment) {
      return NextResponse.json(
        { message: 'Equipment tidak ditemukan atau tidak dimiliki oleh pengguna ini' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    // Update assignment dengan returnedAt
    const updatedAssignment = await customerEquipmentService.PUT.Update(
      existingAssignment.id,
      {
        ...existingAssignment,
        returnedAt: new Date(),
      }
    );
    
    return NextResponse.json(
      { 
        message: 'Equipment berhasil dihapus dari pengguna', 
        data: updatedAssignment 
      }, 
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.error('Error removing equipment from user:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
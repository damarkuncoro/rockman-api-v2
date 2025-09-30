/**
 * Handler GET untuk endpoint /users/[id]/documents
 * Mengambil dokumen pengguna berdasarkan ID
 */
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { usersService } from '@/v2/services/database/users';

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

    // Mengambil data pengguna dari service
    const user = await usersService.GET.ById(userId);
    
    if (!user) {
      return NextResponse.json(
        { message: 'Pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    // Mengambil dokumen pengguna
    // Dalam implementasi nyata, ini akan mengambil dari tabel dokumen
    // Untuk contoh ini, kita menggunakan data dummy
    const userDocuments = [
      {
        id: '1',
        userId: userId,
        name: 'KTP',
        type: 'identity',
        fileUrl: `/storage/users/${userId}/documents/ktp.jpg`,
        uploadedAt: new Date().toISOString(),
        status: 'verified'
      },
      {
        id: '2',
        userId: userId,
        name: 'NPWP',
        type: 'tax',
        fileUrl: `/storage/users/${userId}/documents/npwp.jpg`,
        uploadedAt: new Date().toISOString(),
        status: 'pending'
      }
    ];

    return NextResponse.json(userDocuments, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error saat mengambil dokumen pengguna:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil dokumen pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
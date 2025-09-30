/**
 * Handler GET untuk endpoint /users/[id]/sessions
 * Mengambil sesi pengguna berdasarkan ID
 */
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { userSessionsService } from '@/v2/services/database/user_sessions';

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

    // Mengambil sesi pengguna dari service
    const allSessions = await userSessionsService.GET.All();
    const userSessions = allSessions.filter(session => session.userId === userId);
    
    if (!userSessions || userSessions.length === 0) {
      return NextResponse.json(
        { message: 'Sesi pengguna tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }

    return NextResponse.json(userSessions, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error saat mengambil sesi pengguna:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil sesi pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { changeHistoryService } from '@/v2/services/database/change_history';


/**
 * GET handler untuk mengambil riwayat perubahan pengguna berdasarkan ID
 * 
 * @param request - NextRequest object
 * @param params - Object berisi parameter ID pengguna
 * @returns Promise<NextResponse> - Response dengan data riwayat perubahan atau error
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;

    // Validasi ID pengguna
    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    // Mengambil riwayat perubahan untuk pengguna tertentu
    const allChangeHistory = await changeHistoryService.GET.All();
    const changeHistory = allChangeHistory.filter(history => history.recordId === userId);

    // Format respons sesuai dengan ekspektasi frontend
    return NextResponse.json({
      message: 'User change history fetched successfully',
      data: changeHistory
    }, { status: StatusCodes.OK });
    
  } catch (error) {
    console.error('Error fetching user change history:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
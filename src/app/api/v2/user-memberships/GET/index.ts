import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { userMembershipsService } from '@/v2/services/database/user_memberships';

/**
 * Handler untuk mendapatkan semua data keanggotaan pengguna
 * @returns Response dengan data keanggotaan pengguna
 */
export async function GET() {
  try {
    const userMemberships = await userMembershipsService.GET.All();
    return NextResponse.json({ 
      message: 'User memberships fetched successfully', 
      userMemberships 
    });
  } catch (error) {
    console.error('Error fetching user memberships:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
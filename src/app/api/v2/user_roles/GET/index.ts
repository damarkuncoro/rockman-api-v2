/**
 * GET handler untuk /api/v2/user_roles
 * 
 * Endpoint untuk mendapatkan daftar user_roles
 */

import { NextResponse } from 'next/server';
import { userRolesService } from '@/v2/services/database/user_roles';

export async function GET() {
  try {
    // Gunakan service untuk mendapatkan data
    const roles = await userRolesService.GET.All();

    // Buat response
    return NextResponse.json({
      success: true,
      data: roles
    });
  } catch (error) {
    console.error('Error fetching user roles:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch user roles' },
      { status: 500 }
    );
  }
}
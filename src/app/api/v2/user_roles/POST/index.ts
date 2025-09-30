/**
 * POST handler untuk /api/v2/user_roles
 * 
 * Endpoint untuk menambahkan role baru ke user
 */

import { NextRequest, NextResponse } from 'next/server';
import { userRolesService } from '@/v2/services/database/user_roles';
import { usersService } from '@/v2/services/database/users';
import { rolesService } from '@/v2/services/database/roles';
import { z } from 'zod';

// Validasi input
const userRoleSchema = z.object({
  userId: z.string().uuid(),
  roleId: z.string().uuid()
});

export async function POST(request: NextRequest) {
  try {
    // Parse body request
    const body = await request.json();
    
    // Validasi input
    const validatedData = userRoleSchema.parse(body);
    
    // Periksa apakah user ada menggunakan service
    const userExists = await usersService.GET.ById(validatedData.userId);
    
    if (!userExists) {
      return NextResponse.json({
        success: false,
        error: 'User not found'
      }, { status: 404 });
    }
    
    // Periksa apakah role ada menggunakan service
    const roleExists = await rolesService.GET.ById(validatedData.roleId);
    
    if (!roleExists) {
      return NextResponse.json({
        success: false,
        error: 'Role not found'
      }, { status: 404 });
    }
    
    // Periksa apakah user sudah memiliki role tersebut menggunakan service
    const existingUserRole = await userRolesService.GET.All();
    
    if (existingUserRole.length > 0) {
      return NextResponse.json({
        success: false,
        error: 'User already has this role'
      }, { status: 409 });
    }
    
    // Tambahkan role ke user menggunakan service
    const newUserRole = await userRolesService.POST.Create({
      userId: validatedData.userId,
      roleId: validatedData.roleId
    });
    
    // Return response
    return NextResponse.json({
      success: true,
      data: newUserRole
    }, { status: 201 });
  } catch (error) {
    console.error('Error adding user role:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation failed',
        issues: (error as z.ZodError).format()
      }, { status: 400 });
    }
    
    // Handle other errors
    return NextResponse.json({
      success: false,
      error: 'Failed to add user role'
    }, { status: 500 });
  }
}
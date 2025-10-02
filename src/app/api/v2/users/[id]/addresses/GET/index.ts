/**
 * GET handler untuk /api/v2/users/[id]/addresses
 * 
 * Endpoint untuk mendapatkan daftar addresses berdasarkan user ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { userAddressesService } from '@/v2/services/database/user_addresses';
import { usersService } from '@/v2/services/database/users';
import { StatusCodes } from 'http-status-codes';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;

    // Validasi user ID
    const user = await usersService.GET.ById(userId);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    // Ambil parameter query untuk filtering dan pagination
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const category = searchParams.get('category');
    
    // Buat filter untuk service
    const filter: Record<string, string | number> = {
      userId: userId
    };
    
    if (status) {
      filter.status = status;
    }
    
    if (priority) {
      filter.priority = priority;
    }
    
    if (category) {
      filter.category = category;
    }
    
    // Ambil semua addresses dan filter berdasarkan user ID
    const allAddresses = await userAddressesService.GET.All();
    const addresses = allAddresses.filter(address => address.userId === userId);
    
    // Terapkan filter tambahan jika ada
    let filteredAddresses = [...addresses];
    
    if (status) {
      filteredAddresses = filteredAddresses.filter(address => address.isActive === (status === 'active'));
    }
    
    if (priority) {
      filteredAddresses = filteredAddresses.filter(address => address.isDefault === (priority === 'default'));
    }
    
    if (category) {
      filteredAddresses = filteredAddresses.filter(address => address.label === category);
    }
    
    // Terapkan pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedAddresses = filteredAddresses.slice(startIndex, endIndex);
    
    // Hitung total untuk pagination
    const totalCount = filteredAddresses.length;
    
    // Buat response
    return NextResponse.json({
      success: true,
      data: paginatedAddresses,
      meta: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit)
      }
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching tickets for user:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tickets' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
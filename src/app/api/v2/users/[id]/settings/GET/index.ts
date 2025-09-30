/**
 * Handler GET untuk endpoint /users/[id]/settings
 * Mengambil pengaturan pengguna berdasarkan ID
 */
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { usersService } from '@/v2/services/database/users';
import { userSettingsService } from '@/v2/services/database/user_settings';

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

    // Mengambil pengaturan pengguna dari service
    const settings = await userSettingsService.GET.ById(userId);
    
    // Default settings jika tidak ditemukan
    const userSettings = settings ? {
      language: settings.language || 'id-ID',
      theme: settings.theme || 'light',
      notificationPreferences: {
        email: settings.emailNotifications ?? true,
        sms: settings.smsNotifications ?? false,
        push: settings.pushNotifications ?? true
      },
      privacySettings: {
        dataSharing: settings.dataSharing ?? true,
        activityTracking: settings.activityTracking ?? true
      },
      additionalSettings: settings.additionalSettings || {}
    } : {
      language: 'id-ID',
      theme: 'light',
      notificationPreferences: {
        email: true,
        sms: false,
        push: true
      },
      privacySettings: {
        dataSharing: true,
        activityTracking: true
      },
      additionalSettings: {}
    };

    return NextResponse.json(userSettings, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error saat mengambil pengaturan pengguna:', error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengambil pengaturan pengguna' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
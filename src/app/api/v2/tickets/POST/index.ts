/**
 * POST handler untuk /api/v2/tickets
 * 
 * Endpoint untuk membuat ticket baru
 */

import { NextRequest, NextResponse } from 'next/server';
import { ticketsService } from '@/v2/services/database/tickets';
import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';

/**
 * Mengubah huruf pertama string menjadi kapital
 */
function capitalizeFirstLetter(str: string): string {
  if (str === 'in_progress') return 'In Progress';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Memetakan kategori dari skema validasi ke kategori yang diterima database
 */
function mapCategory(category: 'bug' | 'feature' | 'support' | 'other'): 'network' | 'billing' | 'service_request' {
  const categoryMap: Record<string, 'network' | 'billing' | 'service_request'> = {
    'bug': 'network',
    'feature': 'service_request',
    'support': 'service_request',
    'other': 'billing'
  };
  
  return categoryMap[category];
}

// Validasi input
const ticketSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(3),
  status: z.enum(['open', 'in_progress', 'resolved', 'closed']),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  category: z.enum(['bug', 'feature', 'support', 'other']),
  createdBy: z.string().uuid(),
  assignedTo: z.string().uuid().optional()
});

export async function POST(request: NextRequest) {
  try {
    // Parse body request
    const body = await request.json();
    
    // Validasi input
    const validatedData = ticketSchema.parse(body);
    
    // Gunakan service untuk membuat ticket baru
    const newTicket = await ticketsService.POST.Create({
      title: validatedData.title,
      description: validatedData.description,
      status: capitalizeFirstLetter(validatedData.status) as "Open" | "In Progress" | "Resolved" | "Closed",
      priority: capitalizeFirstLetter(validatedData.priority) as "Low" | "Medium" | "High" | "Urgent",
      category: mapCategory(validatedData.category),
      userId: validatedData.createdBy,
      assignedTo: validatedData.assignedTo
    });
    
    // Return response
    return NextResponse.json({
      success: true,
      data: newTicket
    }, { status: StatusCodes.CREATED });
  } catch (error) {
    console.error('Error creating ticket:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation failed',
        issues: (error as z.ZodError).format()
      }, { status: StatusCodes.BAD_REQUEST });
    }
    
    // Handle other errors
    return NextResponse.json({
      success: false,
      error: 'Failed to create ticket'
    }, { status: StatusCodes.INTERNAL_SERVER_ERROR });
  }
}
/**
 * GET handler untuk /api/v2/ticket-to-knowledge-base
 * 
 * Endpoint untuk mendapatkan daftar relasi antara ticket dan knowledge base article
 */

import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { ticketToKnowledgeBaseService } from '@/v2/services/database/ticket_to_knowledge_base';

export async function GET(request: NextRequest) {
  try {
    // Ambil parameter query
    const searchParams = request.nextUrl.searchParams;
    const ticketId = searchParams.get('ticketId');
    const articleId = searchParams.get('articleId');
    
    // Buat filter untuk service
    const filter: Record<string, string> = {};
    
    if (ticketId) {
      filter.ticketId = ticketId;
    }
    
    if (articleId) {
      filter.articleId = articleId;
    }
    
    // Gunakan service untuk mengambil data
    const relations = await ticketToKnowledgeBaseService.GET.All();
    
    // Filter hasil jika ada parameter
    let filteredRelations = relations;
    if (Object.keys(filter).length > 0) {
      filteredRelations = relations.filter(relation => {
        return Object.entries(filter).every(([key, value]) => 
          relation[key as keyof typeof relation] === value
        );
      });
    }
    
    // Buat response
    return NextResponse.json({
      success: true,
      data: filteredRelations
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching ticket-to-knowledge-base relations:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
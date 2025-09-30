/**
 * POST handler untuk /api/v2/ticket-to-knowledge-base
 * 
 * Endpoint untuk membuat relasi antara ticket dan knowledge base article
 */

import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { ticketToKnowledgeBaseService } from '@/v2/services/database/ticket_to_knowledge_base';
import { ticketsService } from '@/v2/services/database/tickets';
import { knowledgeBaseArticlesService } from '@/v2/services/database/knowledge_base_articles';
import { z } from 'zod';

// Validasi input
const ticketToKnowledgeBaseSchema = z.object({
  ticketId: z.string().uuid(),
  articleId: z.string().uuid()
});

export async function POST(request: NextRequest) {
  try {
    // Parse dan validasi body request
    const body = await request.json();
    const validationResult = ticketToKnowledgeBaseSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validasi gagal', 
          details: validationResult.error.format() 
        },
        { status: StatusCodes.BAD_REQUEST }
      );
    }
    
    const { ticketId, articleId } = validationResult.data;
    
    // Verifikasi ticket dan article ada
    const ticket = await ticketsService.GET.ById(ticketId);
    if (!ticket) {
      return NextResponse.json(
        { success: false, error: 'Ticket tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    const article = await knowledgeBaseArticlesService.GET.ById(articleId);
    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Knowledge base article tidak ditemukan' },
        { status: StatusCodes.NOT_FOUND }
      );
    }
    
    // Cek apakah relasi sudah ada
    const existingRelations = await ticketToKnowledgeBaseService.GET.All();
    const relationExists = existingRelations.some(
      relation => relation.ticketId === ticketId && relation.articleId === articleId
    );
    
    if (relationExists) {
      return NextResponse.json(
        { success: false, error: 'Relasi antara ticket dan article sudah ada' },
        { status: StatusCodes.CONFLICT }
      );
    }
    
    // Buat relasi baru
    const newRelation = await ticketToKnowledgeBaseService.POST.Create({
      ticketId,
      articleId
    });
    
    return NextResponse.json({
      success: true,
      message: 'Relasi berhasil dibuat',
      data: newRelation
    }, { status: StatusCodes.CREATED });
  } catch (error) {
    console.error('Error creating ticket-to-knowledge-base relation:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
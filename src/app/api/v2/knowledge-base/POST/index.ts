/**
 * POST handler untuk /api/v2/knowledge-base
 * 
 * Endpoint untuk membuat artikel basis pengetahuan baru
 */

import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { knowledgeBaseArticlesService } from '@/v2/services/database/knowledge_base_articles';
import { z } from 'zod';

// Validasi input
const knowledgeBaseArticleSchema = z.object({
  title: z.string().min(3).max(255),
  content: z.string().min(10),
  category: z.string().max(100).optional()
});

export async function POST(request: NextRequest) {
  try {
    // Parse dan validasi body request
    const body = await request.json();
    const validationResult = knowledgeBaseArticleSchema.safeParse(body);
    
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
    
    // Buat artikel baru
    const newArticle = await knowledgeBaseArticlesService.POST.Create({
      ...validationResult.data,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    return NextResponse.json({
      success: true,
      message: 'Artikel basis pengetahuan berhasil dibuat',
      data: newArticle
    }, { status: StatusCodes.CREATED });
  } catch (error) {
    console.error('Error creating knowledge base article:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
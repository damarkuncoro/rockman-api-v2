/**
 * GET handler untuk /api/v2/knowledge-base
 * 
 * Endpoint untuk mendapatkan daftar artikel basis pengetahuan
 */

import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { knowledgeBaseArticlesService } from '@/v2/services/database/knowledge_base_articles';

export async function GET(request: NextRequest) {
  try {
    // Ambil parameter query
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    // Gunakan service untuk mengambil data
    const articles = await knowledgeBaseArticlesService.GET.All();
    
    // Filter hasil jika ada parameter
    let filteredArticles = articles;
    
    if (category) {
      filteredArticles = filteredArticles.filter(article => 
        article.category === category
      );
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      filteredArticles = filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchLower) || 
        article.content.toLowerCase().includes(searchLower)
      );
    }
    
    // Buat response
    return NextResponse.json({
      success: true,
      data: filteredArticles
    }, { status: StatusCodes.OK });
  } catch (error) {
    console.error('Error fetching knowledge base articles:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
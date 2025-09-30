import { NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import { knowledgeBaseArticlesService } from '@/v2/services/database/knowledge_base_articles';

export async function GET() {
  
  try {
    const knowledgeBaseArticles = await knowledgeBaseArticlesService.GET.All();
    return NextResponse.json({ message: 'Knowledge Base Articles fetched successfully', knowledgeBaseArticles });
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
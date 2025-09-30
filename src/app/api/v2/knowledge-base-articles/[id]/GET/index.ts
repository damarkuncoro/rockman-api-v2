import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { knowledgeBaseArticlesService } from '@/v2/services/database/knowledge_base_articles';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params

  const knowledgeBaseArticle = await knowledgeBaseArticlesService.GET.ById(resolvedParams.id);
  if (!knowledgeBaseArticle) {
    return NextResponse.json(
      { message: 'Knowledge Base Article not found' },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return NextResponse.json(knowledgeBaseArticle, { status: StatusCodes.OK });
}
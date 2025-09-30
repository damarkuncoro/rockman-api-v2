import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';
import { knowledgeBaseArticlesService } from '@/v2/services/database/knowledge_base_articles';

import { z } from 'zod';

const schema = z.object({
  title: z.string().max(255),
  content: z.string(),
  category: z.string().max(100).optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const knowledgeBaseArticle = await knowledgeBaseArticlesService.POST.Create(parsed.data);

  return NextResponse.json(knowledgeBaseArticle, { status: StatusCodes.CREATED });
}
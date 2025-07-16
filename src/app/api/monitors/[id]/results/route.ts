import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    // Safely access params for future Next.js compatibility
    const params = (context as any).params || (await context).params;
    const id = params.id;
    const monitorId = parseInt(id, 10);
    if (isNaN(monitorId)) {
      return NextResponse.json([]);
    }
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100', 10);
    const results = await prisma.monitorResult.findMany({
      where: { monitorId },
      orderBy: { checkedAt: 'desc' },
      take: limit,
    });
    return NextResponse.json(results);
  } catch (e) {
    return NextResponse.json([]);
  }
} 
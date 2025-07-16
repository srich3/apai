import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const alert = await prisma.alert.update({
    where: { id: params.id },
    data: { resolvedAt: new Date() },
  });
  return NextResponse.json(alert);
} 
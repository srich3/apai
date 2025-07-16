import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  // Safely access params for future Next.js compatibility
  const params = (context as any).params || (await context).params;
  const id = params.id;
  const monitorId = parseInt(id, 10);
  if (isNaN(monitorId)) {
    return NextResponse.json({ error: 'Invalid monitor id' }, { status: 400 });
  }
  const alerts = await prisma.alert.findMany({
    where: { monitorId },
    orderBy: { sentAt: 'desc' },
  });
  return NextResponse.json(alerts);
} 
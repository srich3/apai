import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const monitors = await prisma.monitor.findMany();
  return NextResponse.json(monitors);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const monitor = await prisma.monitor.create({ data });
  return NextResponse.json(monitor);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const { id, ...update } = data;
  const monitor = await prisma.monitor.update({ where: { id }, data: update });
  return NextResponse.json(monitor);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await prisma.monitor.delete({ where: { id } });
  return NextResponse.json({ success: true });
} 
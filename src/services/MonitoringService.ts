import { PrismaClient } from '@prisma/client';
import { checkEndpoint, MonitorCheckResult } from '../lib/monitoring';

const prisma = new PrismaClient();

export async function runAllMonitors() {
  const monitors = await prisma.monitor.findMany();
  for (const monitor of monitors) {
    const result: MonitorCheckResult = await checkEndpoint(
      monitor.url,
      monitor.method,
      monitor.timeout
    );
    await prisma.monitorResult.create({
      data: {
        monitorId: monitor.id,
        responseTime: result.responseTime,
        statusCode: result.statusCode ?? 0,
        errorMessage: result.errorMessage,
        checkedAt: new Date(),
      },
    });
    // Optionally: update monitor status, trigger alerts, etc.
  }
} 
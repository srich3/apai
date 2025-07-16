export interface MonitorCheckResult {
  responseTime: number;
  statusCode: number | null;
  errorMessage?: string;
}

export async function checkEndpoint(url: string, method: string = 'GET', timeout: number = 10000): Promise<MonitorCheckResult> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const start = Date.now();
  try {
    const response = await fetch(url, {
      method,
      signal: controller.signal,
    });
    const responseTime = Date.now() - start;
    clearTimeout(id);
    return {
      responseTime,
      statusCode: response.status,
    };
  } catch (error: any) {
    clearTimeout(id);
    return {
      responseTime: Date.now() - start,
      statusCode: null,
      errorMessage: error.message || 'Unknown error',
    };
  }
} 
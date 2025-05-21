// logger.ts

export function logAnalytics(event: string, payload: Record<string, any> = {}) {
  console.log(`[Analytics] Event: ${event}`, payload);
}

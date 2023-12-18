import express from 'express';
// Common controller interface
export interface Controller {
  run(req: express.Request): Promise<{ status: number; response: unknown }>;
}

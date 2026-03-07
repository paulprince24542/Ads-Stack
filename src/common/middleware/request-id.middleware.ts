// common/middleware/request-id.middleware.ts
import { v4 as uuid } from 'uuid';
import { Request, Response, NextFunction } from 'express';

export function requestIdMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const requestId = uuid();
  req['requestId'] = requestId;
  res.setHeader('X-Request-Id', requestId);
  next();
}

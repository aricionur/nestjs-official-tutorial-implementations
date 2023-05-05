import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('request:', req);
    next();
  }
}

// Also we can implement classic middleware function instead of class version above.
export function logger(req: Request, res: Response, next: NextFunction) {
  // console.log('request:', req);
  // console.log('response:', res);
  // console.log('general app logger...');
  next();
}

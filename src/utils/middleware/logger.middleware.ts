import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      const {statusCode} = res;
      console.log('Request type :', req.method, statusCode);
      console.log('Time :', Date());
    })
    next();
  }
}
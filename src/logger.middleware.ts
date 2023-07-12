import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request type :', req.method);
    console.log('Time :', Date());
    next();
  }
}

export function Test(req: Request, res: Response, next: NextFunction) {
  res.send('Cc MoujLeBGEtMecheuxDu44');
}
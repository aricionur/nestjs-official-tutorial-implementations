import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const isCached = true;
    const isCached = false;
    if (isCached) {
      return of([{ isThisACachedResponse: true }]);
    }
    return next.handle();
  }
}

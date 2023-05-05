import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // This is just for educative implementation. Do real world auth from cilent sent token.
    request.user = { userId: 1, username: 'john', password: 'changeme' };

    // return validateRequest(request); you can implement the token validation in  your custom validation func.
    return true;
    // return false;
  }
}

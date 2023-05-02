import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    super.catch(exception, host);

    // console.log(exception);
    // console.log(exception.message);
    // console.log(exception.response);
    // console.log(exception.stack);
    console.log('Sending exception info to the remote log service...');
  }
}

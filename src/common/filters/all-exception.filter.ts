// common/filters/all-exceptions.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : 500;

    const response =
      exception instanceof HttpException
        ? exception.getResponse()
        : { message: 'Internal server error' };

    res.status(status).json({
      success: false,
      statusCode: status,
      message:
        typeof response === 'string'
          ? response
          : response['message'] || 'Error',
      error:
        typeof response === 'object' ? response : undefined,
      path: req.originalUrl,
      timestamp: new Date().toISOString(),
      requestId: req.requestId,
    });
  }
}

// common/interceptors/response.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const http = context.switchToHttp();
    const req = http.getRequest();
    const res = http.getResponse();

    // return next.handle().pipe(
    //   map((data) => ({
    // success: true,
    // statusCode: res.statusCode,
    // message: res.locals?.message || 'Success',
    // data: data.data ? {
    //   data.data,
    //   meta: data.meta
    // } : data,
    // path: req.originalUrl,
    // timestamp: new Date().toISOString(),
    // requestId: req.requestId,
    //   })),
    // );
    return next.handle().pipe(
      map((data) => {
        if (data?.meta && data?.data) {
          return {
            success: true,
            statusCode: res.statusCode,
            message: res.locals?.message || 'Success',
            data: data.data,
            meta: data.meta,
            path: req.originalUrl,
            timestamp: new Date().toISOString(),
            requestId: req.requestId,
          };
        } else {
          return {
            success: true,
            statusCode: res.statusCode,
            message: res.locals?.message || 'Success',
            data: data,

            path: req.originalUrl,
            timestamp: new Date().toISOString(),
            requestId: req.requestId,
          };
        }
      }),
    );
  }
}

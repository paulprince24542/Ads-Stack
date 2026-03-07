// common/interfaces/api-response.interface.ts
export interface ApiResponse<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
  meta?: Record<string, any>;
  error?: any;
  path: string;
  timestamp: string;
  requestId: string;
}

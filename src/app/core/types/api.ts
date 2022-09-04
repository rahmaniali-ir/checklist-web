export interface ApiResponse<T = any, M = any> {
  success: boolean;
  message: string;
  body: T;
  meta?: M;
}

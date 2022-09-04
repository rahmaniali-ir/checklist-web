import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../../types/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  handleHttpError(description: string) {
    console.error('API Error:', description);
  }

  errorHandlerWrapper<T = any>(obs: Observable<ApiResponse<T>>) {
    return new Observable<T>((subscriber) => {
      obs.subscribe({
        next: (res) => {
          if (res.success) {
            subscriber.next(res.body);
            subscriber.complete();
          } else {
            // Handle error for each message
            this.handleHttpError(res.message);

            subscriber.error(res.message);
            subscriber.complete();
          }
        },
        error: (err) => {
          this.handleHttpError(err.message);
          subscriber.error(err.message);
          subscriber.complete();
        },
      });
    });
  }

  rawErrorHandlerWrapper<T = any>(obs: Observable<ApiResponse<T>>) {
    return new Observable<ApiResponse<T>>((subscriber) => {
      obs.subscribe({
        next: (res) => {
          if (res.success) {
            subscriber.next(res);
            subscriber.complete();
          } else {
            // Handle error for each message
            this.handleHttpError(res.message);

            subscriber.error(res.message);
            subscriber.complete();
          }
        },
        error: (err) => {
          this.handleHttpError(err.message);
          subscriber.error(err.message);
          subscriber.complete();
        },
      });
    });
  }

  get<T = any>(url: string) {
    return this.errorHandlerWrapper<T>(
      this.http.get<ApiResponse<T>>(environment.apiPath + url)
    );
  }

  getRaw<T = any, M = any>(url: string) {
    return this.rawErrorHandlerWrapper(
      this.http.get<ApiResponse<T, M>>(environment.apiPath + url)
    );
  }

  post<T = any>(url: string, body: any) {
    return this.errorHandlerWrapper<T>(
      this.http.post<ApiResponse<T>>(environment.apiPath + url, body)
    );
  }

  put<T = any>(url: string, body: any) {
    return this.errorHandlerWrapper<T>(
      this.http.put<ApiResponse<T>>(environment.apiPath + url, body)
    );
  }

  patch<T = any>(url: string, body: any) {
    return this.errorHandlerWrapper<T>(
      this.http.patch<ApiResponse<T>>(environment.apiPath + url, body)
    );
  }

  delete<T = any>(url: string) {
    return this.errorHandlerWrapper<T>(
      this.http.delete<ApiResponse<T>>(environment.apiPath + url)
    );
  }
}

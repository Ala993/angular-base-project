import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(private authServerProvider: AuthServerProvider, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {                    
          if (err instanceof HttpErrorResponse) {                         
            if (err.status === 401 || err.status === 403) {
              this.authServerProvider.logout();
              this.router.navigate(['/login']);
            }
          }
        }
      )
    );
  }
}

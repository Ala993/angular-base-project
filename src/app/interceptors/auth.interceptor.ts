import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (/^http/.test(request.url) && !(environment.apiUrl && request.url.startsWith(environment.apiUrl)))) {
      return next.handle(request);
    }
    
    const token = localStorage.getItem('authenticationToken') || sessionStorage.getItem('authenticationToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
     
    } else {
      this.router.navigateByUrl("login")
    }

    return next.handle(request);
  }
}

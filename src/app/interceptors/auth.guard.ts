import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServerProvider } from '../services/auth-jwt.service';


@Injectable({
   providedIn: 'root'
})

export class AuthGuard implements CanActivate {

   constructor(private router: Router, private authServerProvider: AuthServerProvider) {

   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const token = localStorage.getItem('authenticationToken') || sessionStorage.getItem('authenticationToken');
      const isAuthenticated = this.authServerProvider.isAuthenticated();
      if (!token) {         
         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      }
      
      return isAuthenticated;
   }
}

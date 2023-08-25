import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ManagedUserVM } from '../models/managed-user.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  authenticated = false;
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    const data = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe,
    };
    return this.http
      .post(environment.apiUrl + 'api/authenticate', data)
      .pipe(map(authenticateSuccess.bind(this)));

    function authenticateSuccess(this: any, resp) {
      const jwt = resp.id_token;
      this.storeAuthenticationToken(jwt, credentials.rememberMe);
      this.authenticated = true
    }
  }

  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('authenticationToken', jwt);
    } else {
      sessionStorage.setItem('authenticationToken', jwt);
    }
  }

  logout(){
      localStorage.clear();
      sessionStorage.clear();
  }

  isAuthenticated(): boolean{
    return this.authenticated
  }

  checkAuthentication(): Observable<string>{
    const httpOptions : Object = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'text/plain; charset=utf-8'
      }),
      responseType: 'text'
    };
    return this.http.get<string>(environment.apiUrl+"api/authenticate",  httpOptions);
  }


  register(managedUserVM: ManagedUserVM){
   return this.http.post(environment.apiUrl+"api/register",managedUserVM)
  }

  currentUser(): Observable<User>{
    return this.http.get(environment.apiUrl+"api/current-user")
  }
}

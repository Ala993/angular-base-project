import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  isAuthenticated(): Observable<any> {
    return this.http.get(environment.apiUrl+"api/authenticate");
  }
}

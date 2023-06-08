import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { baseUserUrl } from 'enviornment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  userLogin(formData: any): Observable<any> {
    return this.http.post(baseUserUrl + 'login', formData)
  }
}

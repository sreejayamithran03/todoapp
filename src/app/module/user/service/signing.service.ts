import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUserUrl } from 'enviornment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigningService {

  constructor(private http: HttpClient) { }

  PostTask(formData: any): Observable<any> {
    return this.http.post(baseUserUrl + 'signup', formData)
  }//for signup

  checkEmail(email: string): Observable<any> {
    const params = new HttpParams().set('email', email)
    return this.http.get(baseUserUrl + 'email/check', { params })
  }
}

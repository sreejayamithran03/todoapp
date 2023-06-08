import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) { }
  canActivate() {
    let tokenExist = !!localStorage.getItem('token')//check the tocken in back 
    console.log(tokenExist)
    if (!tokenExist) {
      this.router.navigateByUrl('user')
    }
    return true
  }
}



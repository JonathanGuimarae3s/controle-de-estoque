import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanActivateChildFn } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {



  constructor(private service: LoginService, private router: Router) { }


canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const token = localStorage.getItem('token');
  if (token && this.service.validarToken()) {
    return true;
    
  }else{
    this.router.navigate(['login']),{queryParams:{return: state.url}}
    return false;
  }
}


}

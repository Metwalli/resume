import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild,
  Router, ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(private _authService: AuthService, private _router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean{
    let url = state.url;    
    if ( this._authService.user ){
      return true;
    }else{
      this._authService.redirectUrl = url;      
      this._router.navigate(['/login']);
      return false;
    }    
  }

  checkLogin(url: string): boolean{
    if ( this._authService.user ){
      return true;
    }else{
      //this._authService.redirectUrl = url;
      this._router.navigate(['/login']);;
      return false;
    }
    
  }
  

}

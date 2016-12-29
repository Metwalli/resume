import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) {
    if (this._authService.user){
      let url = this._authService.redirectUrl? this._authService.redirectUrl: '/home';
      this._router.navigate([url]);
    }
   }

  ngOnInit() {
  }

  login(provider: string){
    this._authService.login(provider);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2'
import { AuthService } from '../core/auth.service';
import { TranslatePipe } from '../shared/translate/translate.pipe';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  
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

import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
//import { AuthGuardService } from '../core/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
        { 
          path: 'login', 
          component: LoginComponent,          
        }                                       
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRouting {}

import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'auth', component: AuthComponent },   
        { path: 'sign-up', component: SignUpComponent },
        { path: 'reset-password', component: ResetPasswordComponent}                                    
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}

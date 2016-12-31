import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'login', component: AuthComponent },   
        { path: 'sign-up', component: SignUpComponent }                                    
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}

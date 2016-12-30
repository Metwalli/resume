import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        {
          path: 'sign-up',
          component: SignUpComponent
        },
        { 
          path: 'login', 
          component: AuthComponent,          
        }                                       
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}

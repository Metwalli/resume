import { NgModule } from '@angular/core';
import { MdlModule } from 'angular2-mdl';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    AuthRoutingModule,
    MdlModule
  ],
  declarations: [AuthComponent, SignUpComponent, ResetPasswordComponent],
  exports:[SignUpComponent]
})
export class AuthModule { }

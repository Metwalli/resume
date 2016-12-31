import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    SharedModule,
    //CoreModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent, SignUpComponent]
})
export class AuthModule { }

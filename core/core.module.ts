import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { SharedModule } from '../shared/shared.module';
import { ResumeVersionService } from './resume-version.service';
import { ResumeVersionResolve } from './resume-version-resolve.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

export const firebaseConfig = {
        apiKey: "AIzaSyCyppx8Kbhi1ejUS-rWMu-BYhynG45a7kA",
        authDomain: "resume-6f14f.firebaseapp.com",
        databaseURL: "https://resume-6f14f.firebaseio.com",
        storageBucket: "resume-6f14f.appspot.com",
        messagingSenderId: "401576707644"
      };
const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  imports: [
    CommonModule, SharedModule.forRoot({code:"ar",name: "عربي", symbol:"ع",dir:"rtl"}),    
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService, AuthGuardService, ResumeVersionService, ResumeVersionResolve],
  declarations: []
})
export class CoreModule { }

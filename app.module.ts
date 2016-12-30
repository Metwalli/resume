import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { CovalentCoreModule } from '@covalent/core';
import { SharedModule } from './shared/shared.module';
import { ResumeVersionModule } from './resume-version/resume-version.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


// export const firebaseConfig = {
//         apiKey: "AIzaSyCyppx8Kbhi1ejUS-rWMu-BYhynG45a7kA",
//         authDomain: "resume-6f14f.firebaseapp.com",
//         databaseURL: "https://resume-6f14f.firebaseio.com",
//         storageBucket: "resume-6f14f.appspot.com",
//         messagingSenderId: "401576707644"
//       };
// const myFirebaseAuthConfig = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,    
    //AngularFireModule.initializeApp(firebaseConfig),
    CovalentCoreModule.forRoot(),
    AuthModule,
    CoreModule,
    //ResumeVersionModule,    
    AppRoutingModule
  ],
  providers: [AppRoutingModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

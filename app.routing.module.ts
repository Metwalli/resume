import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        { path: 'share', component: SharedComponent },
        { path: 'login', component: LoginComponent },
        {
          path: 'resume-version',
          loadChildren: 'app/resume-version/resume-version.module#ResumeVersionModule'
        }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

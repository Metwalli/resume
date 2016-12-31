import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        {
          path: 'login',
          loadChildren: 'app/auth/auth.module#AuthModule'
        },
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

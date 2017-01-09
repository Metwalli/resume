import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        {
          path: 'auth',
          loadChildren: 'app/auth/auth.module#AuthModule'
        },
        
        {
          path: 'resume-template',
          loadChildren: 'app/resume-template/resume-template.module#ResumeTemplateModule'
        },
        
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

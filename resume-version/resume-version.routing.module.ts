import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeVersionComponent } from './resume-version.component';
import { VersionDetailComponent} from './version-detail/version-detail.component';
import { VersionListComponent} from './version-list/version-list.component';
import { ResumeVersionResolve } from '../core/resume-version-resolve.service';
import { AuthGuardService } from '../core/auth-guard.service';
@NgModule({
  imports: [
    RouterModule.forChild([
        { 
          path: 'resume-version', 
          component: ResumeVersionComponent,
          canActivate:[AuthGuardService],
          children:[
            {
              path: '',
              //canActivateChild: [AuthGuardService],
              children:[
                { path: '', component: VersionListComponent },
                { path: ':id', component: VersionDetailComponent }     
              ]
            }
          ]          
        }                                       
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ResumeVersionRoutingModule {}

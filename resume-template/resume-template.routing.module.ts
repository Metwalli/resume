import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeTemplateComponent } from './resume-template.component';
import { Template1Component } from './template-1/template-1.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { MainTemplateComponent } from './main-template/main-template.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { 
          path: 'resume-template', 
          component: ResumeTemplateComponent,
          children:[            
            { path: '', component: MainTemplateComponent },
            { path: 'list', component: TemplateListComponent },
            { path: ':id', component: Template1Component }     
          ]                    
        }                                       
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ResumeTemplateRoutingModule {}
 
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ResumeTemplateComponent } from './resume-template.component';
import { Template1Component } from './template-1/template-1.component';
import { Template1SectionComponent } from './template-1/template-1-section/template-1-section.component';
import { ResumeTemplateRoutingModule } from './resume-template.routing.module';
import { TemplateListComponent } from './template-list/template-list.component';
import { MainTemplateComponent } from './main-template/main-template.component';

@NgModule({
  imports: [
    SharedModule,
    ResumeTemplateRoutingModule
  ],
  declarations: [ResumeTemplateComponent, Template1Component, Template1SectionComponent, TemplateListComponent, MainTemplateComponent],
  exports: [ResumeTemplateComponent, TemplateListComponent, MainTemplateComponent]
})
export class ResumeTemplateModule { }

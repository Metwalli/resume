import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeTemplateComponent } from './resume-template.component';
import { Template1Component } from './template-1/template-1.component';
import { Template1SectionComponent } from './template-1/template-1-section/template-1-section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResumeTemplateComponent, Template1Component, Template1SectionComponent]
})
export class ResumeTemplateModule { }

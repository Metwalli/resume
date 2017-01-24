import { ModuleWithProviders, NgModule,
         Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { CovalentCoreModule } from '@covalent/core';
import { TranslateComponent } from './translate/translate.component';
import { TranslateService, TranslateLanguage } from './translate/translate.service';
import { TranslatePipe } from './translate/translate.pipe';
import { TRANSLATION_PROVIDERS } from './translate/translations';
import { DirPipe } from './translate/dir.pipe';

import { SharedComponent } from './shared.component';
import { MakeDraggableDirective } from './make-draggable.directive';
import { MakeDroppableDirective } from './make-droppable.directive';

@NgModule({
  imports: [
    CommonModule, CovalentCoreModule.forRoot()
  ],
  declarations: [SharedComponent, TranslateComponent, TranslatePipe, MakeDraggableDirective, MakeDroppableDirective],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, CovalentCoreModule,
    TranslateComponent, TranslatePipe, MakeDraggableDirective, MakeDroppableDirective
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot(lang: TranslateLanguage): ModuleWithProviders {
  return {
    ngModule: SharedModule,
    providers: [
      TRANSLATION_PROVIDERS, TranslateService, 
      {provide: TranslateLanguage, useValue: lang}
    ]
  };
}
 }

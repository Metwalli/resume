import {Component, Input, OnInit} from '@angular/core';
import {Language} from '../../../shared/models/language';
import { SectionComponent } from '../section.component';

@Component({
  selector: 'language',
  templateUrl: 'language.component.html',
})

export class LanguageComponent extends SectionComponent{  
  @Input() section: any;        
  constructor(){ super(); }  
  ngOnInit(){    
    if(this.section.itemList.length == 0){
      this.addItem();       
    }else{
      this.currentItemIndex = this.section.itemList.length - 1;
    }
  }
}

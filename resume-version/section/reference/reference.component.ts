import {Component, Input, OnInit} from '@angular/core';
import {Reference} from '../../../shared/models/reference';
import { SectionComponent } from '../section.component';

@Component({
  
  selector: 'reference',
  templateUrl: 'reference.component.html',  
})

export class ReferenceComponent extends SectionComponent{  
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

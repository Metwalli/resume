import {Component, Input, OnInit} from '@angular/core';
import {Publication} from '../../../shared/models/publication';
import { SectionComponent } from '../section.component';

@Component({
  
  selector: 'publication',  
  templateUrl: 'publication.component.html'
})

export class PublicationComponent extends SectionComponent{  
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


import {Component, Input, OnInit} from '@angular/core';
import {Award} from '../../../shared/models/award';
import { SectionComponent } from '../section.component';

@Component({  
  selector: 'award',
  templateUrl: 'award.component.html'  
})

export class AwardComponent extends SectionComponent{  
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

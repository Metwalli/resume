import {Component, Input, OnInit} from '@angular/core';
import {Volunteering} from '../../../shared/models/volunteering';
import { SectionComponent } from '../section.component';

@Component({  
  selector: 'volunteering',
  templateUrl: 'volunteering.component.html',
  
})

export class VolunteeringComponent extends SectionComponent{  
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

import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../../../shared/models/experience';
import { SectionComponent } from '../section.component';
//import { Section } from '../../../shared/models/section';
@Component({
  
  selector: 'experience',
  templateUrl: 'experience.component.html'
})

export class ExperienceComponent extends SectionComponent {  
  @Input() section: any;
  constructor( ){ super();}  
  ngOnInit(){    
    if(this.section.itemList.length == 0){
      this.addItem();       
    }else{
      this.currentItemIndex = this.section.itemList.length - 1;
    }
  }
}

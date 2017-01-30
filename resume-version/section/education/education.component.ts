import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../../shared/models/education';
import { SectionComponent } from '../section.component';

@Component({
  selector: 'education',  
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']  
})

export class EducationComponent extends SectionComponent{    
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

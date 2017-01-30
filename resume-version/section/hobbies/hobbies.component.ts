import { Component, OnInit, Input } from '@angular/core';
import { Hobby } from '../../../shared/models/hobby';
import { SectionComponent } from '../section.component';

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent extends SectionComponent{  
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

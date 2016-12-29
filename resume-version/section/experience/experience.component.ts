import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../../../shared/models/experience';

@Component({
  
  selector: 'experience',
  templateUrl: 'experience.component.html'
})

export class ExperienceComponent {
  @Input() itemList: Experience[];
  constructor(
    ){

  }  
  ngOnInit(){
    if(this.itemList.length == 0){
      this.addNewItem();      
    }    
  }
  
  addNewItem(){
    this.itemList.push(new Experience());    
  }
  
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }
}

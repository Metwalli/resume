import {Component, Input, OnInit} from '@angular/core';
import {Volunteering} from '../../../shared/models/volunteering';

@Component({  
  selector: 'volunteering',
  templateUrl: 'volunteering.component.html',
  
})

export class VolunteeringComponent{  
  @Input() itemList: Volunteering[];
  constructor(
    ){

  }  
  ngOnInit(){
    if(this.itemList.length == 0){
      this.addNewItem();      
    }    
  }
  
  addNewItem(){
    this.itemList.push(new Volunteering());    
  }
  
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }
}

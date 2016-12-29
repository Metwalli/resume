import {Component, Input, OnInit} from '@angular/core';
import {Award} from '../../../shared/models/award';

@Component({  
  selector: 'award',
  templateUrl: 'award.component.html'  
})

export class AwardComponent{  
  @Input() itemList: Award[];
  constructor(
    ){ }  
  ngOnInit(){
    if(this.itemList.length == 0){
      this.addNewItem();      
    }    
  }
  
  addNewItem(){    
    this.itemList.push(new Award());    
  }
  
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Reference} from '../../../shared/models/reference';

@Component({
  
  selector: 'reference',
  templateUrl: 'reference.component.html',  
})

export class ReferenceComponent{  
 @Input() itemList: Reference[];
  constructor(
    ){

  }  
  ngOnInit(){
    if(this.itemList.length == 0){
      this.addNewItem();      
    }    
  }
  
  addNewItem(){
    this.itemList.push(new Reference());    
  }
  
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }
}

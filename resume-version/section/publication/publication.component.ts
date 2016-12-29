import {Component, Input, OnInit} from '@angular/core';
import {Publication} from '../../../shared/models/publication';

@Component({
  
  selector: 'publication',  
  templateUrl: 'publication.component.html'
})

export class PublicationComponent{  
  @Input() itemList: Publication[];
  constructor(
    ){

  }  
  ngOnInit(){
    if(this.itemList.length == 0){
      this.addNewItem();      
    }    
  }
  
  addNewItem(){
    this.itemList.push(new Publication());    
  }
  
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }
}


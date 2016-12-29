import {Component, Input, OnInit} from '@angular/core';
import {Language} from '../../../shared/models/language';

@Component({
  selector: 'language',
  templateUrl: 'language.component.html',
})

export class LanguageComponent{  
  constructor(
    ){

  }  
  ngOnInit(){
    if(this.itemList.length == 0){
      this.addNewItem();      
    }    
  }
  @Input() itemList: Language[];

  addNewItem(){    
    this.itemList.push(new Language());    
  }
 
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }  
}

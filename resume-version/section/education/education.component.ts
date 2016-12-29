import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../../shared/models/education';

@Component({
  selector: 'education',  
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']  
})

export class EducationComponent implements OnInit{    
  @Input() itemList: Education[];      
  constructor(){  }  
  ngOnInit(){    
    //debugger;
    if(this.itemList.length == 0){
      this.addNewItem();       
    }      
  }

  addNewItem(){    
    this.itemList.push(new Education());    
  }
  
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }
}

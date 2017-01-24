import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../../shared/models/education';

@Component({
  selector: 'education',  
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']  
})

export class EducationComponent implements OnInit{    
  @Input() itemList: Education[];     
  currentItemIndex: number;   
  constructor(){  }  
  ngOnInit(){    
    //debugger;
    if(this.itemList.length == 0){
      this.addNewItem();       
    }else{
      this.currentItemIndex = this.itemList.length - 1;
    }

  }
  addNewItem(){    
    this.itemList.push(new Education());   
    this.currentItemIndex = this.itemList.length - 1; 
  } 
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }
  itemSelected(index: number){    
    this.currentItemIndex = index;
  }
}

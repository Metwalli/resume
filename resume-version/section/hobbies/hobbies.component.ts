import { Component, OnInit, Input } from '@angular/core';
import { Hobby } from '../../../shared/models/hobby';

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  @Input() itemList: Hobby[];
  constructor( ){ }  
  ngOnInit(){
    if(this.itemList.length == 0){
      this.addNewItem();      
    }    
  }
  
  addNewItem(){  
    this.itemList.push(new Hobby());    
  }

  removeItem(index: number){
    this.itemList.splice(index,1);    
  }

}

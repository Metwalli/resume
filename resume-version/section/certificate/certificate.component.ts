import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from '../../../shared/models/certificate';

@Component({  
  selector: 'certificate',
  templateUrl: 'certificate.component.html'
})

export class CertificateComponent{  
  @Input() itemList: Certificate[];
  constructor(
    ){

  }  
  ngOnInit(){
    if(this.itemList.length == 0){
      this.addNewItem();      
    }    
  }
  
  addNewItem(){
    this.itemList.push(new Certificate());    
  }
  
  removeItem(index: number){
    this.itemList.splice(index,1);    
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from '../../../shared/models/certificate';
import { SectionComponent } from '../section.component';

@Component({  
  selector: 'certificate',
  templateUrl: 'certificate.component.html'
})

export class CertificateComponent extends SectionComponent{  
  @Input() section: any;        
  constructor(){ super(); }  
  ngOnInit(){    
    if(this.section.itemList.length == 0){
      this.addItem();       
    }else{
      this.currentItemIndex = this.section.itemList.length - 1;
    }
  }
  
}

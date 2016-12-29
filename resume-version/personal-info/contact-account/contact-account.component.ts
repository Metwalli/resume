import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../../shared/models/account';
import {IconListComponent} from '../../icon/icon-list.component';

@Component({
  selector: 'contact-account',
  templateUrl: './contact-account.component.html',
  styleUrls: ['./contact-account.component.css']
})
export class ContactAccountComponent implements OnInit {
  @Input() item: Account = new Account();
  constructor(
    ){  }  
  ngOnInit(){
         
  }
  
  onChangeIcon(icn: string){
      this.item.icon = icn;
  }  
}

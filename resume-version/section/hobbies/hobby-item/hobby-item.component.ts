import { Component, OnInit, Input } from '@angular/core';
import { Hobby } from '../../../../shared/models/hobby';
@Component({
  selector: 'hobby-item',
  templateUrl: './hobby-item.component.html',
  styleUrls: ['./hobby-item.component.scss']
})
export class HobbyItemComponent implements OnInit {
  @Input() item: Hobby = new Hobby();
  constructor() { }

  ngOnInit() {
  }
  
  onChangeIcon(icn: string){
      this.item.icon = icn;
  }
}

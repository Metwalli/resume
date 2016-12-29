import { Component, OnInit, Input } from '@angular/core';
import { Reference } from '../../../../shared/models/reference';

@Component({
  selector: 'reference-item',
  templateUrl: './reference-item.component.html',
  styleUrls: ['./reference-item.component.css']
})
export class ReferenceItemComponent implements OnInit {
  @Input() item: Reference = new Reference();
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Publication } from '../../../../shared/models/publication';
@Component({
  selector: 'publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.css']
})
export class PublicationItemComponent implements OnInit {
  @Input() item: Publication = new Publication();
  constructor() { }

  ngOnInit() {
  }

}

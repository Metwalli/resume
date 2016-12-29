import { Component, OnInit, Input } from '@angular/core';
import { Volunteering } from '../../../../shared/models/volunteering';

@Component({
  selector: 'volunteering-item',
  templateUrl: './volunteering-item.component.html',
  styleUrls: ['./volunteering-item.component.css']
})
export class VolunteeringItemComponent implements OnInit {
  @Input() item: Volunteering = new Volunteering();
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../../../shared/models/experience';
@Component({
  selector: 'experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() item: Experience = new Experience();
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../../shared/models/skill';
@Component({
  selector: 'skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() item: Skill = new Skill();
  constructor() { }

  ngOnInit() {
  }

}

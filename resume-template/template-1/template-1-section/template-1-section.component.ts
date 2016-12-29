import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../../shared/models/section';

@Component({
  selector: 'template-1-section',
  templateUrl: './template-1-section.component.html',
  styleUrls: ['./template-1-section.component.css']
})
export class Template1SectionComponent implements OnInit {
  @Input() section: Section = new Section();
  constructor() { }

  ngOnInit() {
  }

}

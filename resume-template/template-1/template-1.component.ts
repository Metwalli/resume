import { Component, OnInit, Input } from '@angular/core';
import { ResumeVersion } from '../../shared/models/resume-version';
@Component({
  selector: 'app-template-1',
  templateUrl: './template-1.component.html',
  styleUrls: ['./template-1.component.css']
})
export class Template1Component implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  constructor() { }

  ngOnInit() {
  }

}

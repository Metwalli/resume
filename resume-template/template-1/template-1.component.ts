import { Component, OnInit, Input } from '@angular/core';
import { ResumeVersion } from '../../shared/models/resume-version';
import {ResumeVersionService} from '../../core/resume-version.service';

@Component({
  selector: 'template-1',
  templateUrl: './template-1.component.html',
  styleUrls: ['./template-1.component.css']
})
export class Template1Component implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  constructor(public versionService: ResumeVersionService) { }

  ngOnInit() {
  }

}

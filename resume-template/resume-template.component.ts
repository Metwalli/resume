import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResumeVersion } from '../shared/models/resume-version';


@Component({
  selector: 'resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {
  version: ResumeVersion = new ResumeVersion();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }
}

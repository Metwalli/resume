import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResumeVersion } from '../shared/models/resume-version';
import { TranslatePipe } from '../shared/translate/translate.pipe';
import { TranslateService } from '../shared/translate/translate.service';
import { TranslateComponent } from '../shared/translate/translate.component';
import {ResumeVersionService} from '../core/resume-version.service';



@Component({
  selector: 'resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  constructor(private _versionService: ResumeVersionService ) { }

  ngOnInit() {
    this.version = this._versionService.currentVersion;
  }
}

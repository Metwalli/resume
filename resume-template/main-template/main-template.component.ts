import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResumeVersion } from '../../shared/models/resume-version';
import { TranslatePipe } from '../../shared/translate/translate.pipe';
import { TranslateService } from '../../shared/translate/translate.service';
import { TranslateComponent } from '../../shared/translate/translate.component';
import {ResumeVersionService} from '../../core/resume-version.service';

@Component({
  selector: 'main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent implements OnInit {

  @Input() version: ResumeVersion = new ResumeVersion();
  constructor(private _versionService: ResumeVersionService) {  }
      
  ngOnInit() {
    //this.version = this._versionService.currentVersion;    
  }

}

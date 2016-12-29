import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateServiceConfig } from './translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {  
  languageList: TranslateServiceConfig[] = [
    {code: 'ar', name: 'عربي', symbol: 'ع', dir: "rtl"},
    {code: 'en', name: 'English', symbol: 'EN', dir: "ltr"},
  ]  
  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    
  }
  selectLang(lang: TranslateServiceConfig) {    
    this._translate.use(lang);    
  }
}

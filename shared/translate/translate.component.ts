import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateLanguage } from './translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {  
  languageList: TranslateLanguage[] = [
    {code: 'ar', name: 'عربي', symbol: 'ع', dir: "rtl"},
    {code: 'en', name: 'English', symbol: 'EN', dir: "ltr"},
  ]  
  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    
  }
  selectLang(lang: TranslateLanguage) {    
    this._translate.use(lang);    
  }
}

import { Injectable, Inject, Optional } from '@angular/core';
import { TRANSLATIONS } from './translations';

export class TranslateLanguage{
	code: string;
	name: string;
	symbol: string;
	dir: string;
	constructor(code?: string, name?: string, symbol?: string, dir?: string){
		this.code = code;
		this.name = name;
		this.symbol = symbol;
		this.dir = dir;
	}	
}


@Injectable()
export class TranslateService {
  private _currentLang: TranslateLanguage = new TranslateLanguage("ar", "عربي" , "ع", "rtl");
	public get currentLang() {
	  return this._currentLang;
	}

  // inject our translations
	constructor(@Inject(TRANSLATIONS) private _translations: any, @Optional() language: TranslateLanguage) {
		if (language) { this._currentLang = language; }
  }

	public use(language: TranslateLanguage): void {
		// set current language
		if(language.code != this._currentLang.code ){
			this._currentLang = language;
		}		
	}

	private translate(key: string): string {
		// private perform translation
		let translation = key;
    
    if (this._translations[this._currentLang.code] && this._translations[this._currentLang.code][key]) {
			return this._translations[this._currentLang.code][key];
		}

		return translation;
	}

	public instant(key: string) {
		// public perform translation
		return this.translate(key); 
	}
	public getDir(): string{
		return this._currentLang.dir;
	}
}

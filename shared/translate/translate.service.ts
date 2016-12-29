import { Injectable, Inject, Optional } from '@angular/core';
import { TRANSLATIONS } from './translations';

export class TranslateServiceConfig{
	constructor(){}
	code: string = "ar";
	name: string = "عربي";
	symbol: string = "ع";
	dir: string = "rtl";
}


@Injectable()
export class TranslateService {
  private _currentLang: TranslateServiceConfig = new TranslateServiceConfig();
	public get currentLang() {
	  return this._currentLang;
	}

  // inject our translations
	constructor(@Inject(TRANSLATIONS) private _translations: any, @Optional() langConfig: TranslateServiceConfig) {
		if (langConfig) { this._currentLang = langConfig; }
  }

	public use(lang: TranslateServiceConfig): void {
		// set current language
		this._currentLang = lang;
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
	public getLangDir(): string{
		return this.currentLang.dir;
	}
}

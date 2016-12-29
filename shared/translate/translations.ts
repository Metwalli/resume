import { OpaqueToken } from '@angular/core';
import { AR_TRANSLATION } from './lang/ar';

export const TRANSLATIONS = new OpaqueToken('translations');

const dictionary = {
	['ar']: AR_TRANSLATION
};

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];


import {PersonalInfo} from './personal-info';
import { Section } from './section';

/**
 * ResumeVersion
 */
export class ResumeVersion {
    constructor() { }
    $key: string = "";
    name: string = "";
    language: string = "";
    direction: string = ""; 
    templateID: string ="1";   
    personalInfo: PersonalInfo = new PersonalInfo();    
    sectionList: Section[] = [];     
    // createdDate: Date;
    // updatedDate: Date;
}
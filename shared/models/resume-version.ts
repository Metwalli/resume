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
    templateID: string ="";   
    personalInfo: PersonalInfo = new PersonalInfo();
    //sectionIDs: string[] = [];
    sectionList: Section[] = []; 
    //userID: string;
}
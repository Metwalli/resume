import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { ResumeVersion } from '../shared/models/resume-version';
import { Section } from '../shared/models/section';


@Injectable()

export class ResumeVersionService{ 
  user: FirebaseAuthState;   
  userID: string;
  public currentVersion: ResumeVersion = new ResumeVersion();
  public versionList: FirebaseListObservable<ResumeVersion[]>;
  constructor (
    private af: AngularFire
    ){              
      this.af.auth.subscribe(auth => this.user = auth);  
      if ( this.user ){
        this.versionList = this.af.database.list(`/userVersions/${this.user.uid}`);
      }                 
  }
  
  getUserVersionList(): FirebaseListObservable<ResumeVersion[]>{    
    return this.versionList     
  }
  
  getVersion(key: string): FirebaseObjectObservable<ResumeVersion>{
      if ( this.user ){
        // let version: ResumeVersion = new ResumeVersion();
        // this.versionList.subscribe(vl => {
        //   vl.forEach(v => {
        //     if( v.$key == key){version = v;}
        //   });
        // });
        // return version;
        return this.af.database.object(`/userVersions/${this.user.uid}/${key}`);      
      }
  }
  
  addVersion(version: ResumeVersion){
    if(this.user.uid){
      version.$key = this.af.database.list(`/userVersions/${this.user.uid}`).push({
        name: version.name, 
        language: version.language, 
        personalInfo: version.personalInfo,
        templateID: version.templateID || "", 
        sectionList: version.sectionList
      }).key;
      return version.$key; 
    }     
       
  }

  updateVersion(version: ResumeVersion){
    
    this.af.database.object(`/userVersions/${this.user.uid}/${version.$key}`).update({
      name: version.name, 
      language: version.language, 
      personalInfo: version.personalInfo,
      templateID: version.templateID, 
      sectionList: version.sectionList
    });     
    
  }

  deleteVersion(key: string){
    this.af.database.list(`/userVersions/${this.user.uid}`).remove(key);
  }

  setSectionList(versionID: string, sectionList: Section[]){
    this.af.database.list(`/versionSections`).update(versionID,sectionList);     
  }
  getSectionList(versionID: string): FirebaseListObservable<Section[]>{
    return this.af.database.list(`/versionSections/${versionID}`);     
  }
  addSection(versionID:string,section: Section){
    this.af.database.list(`/versionSections/${versionID}`).push(section);
    return section.$key;
  }
  updateSection(versionID:string, section: Section){
    this.af.database.object(`/versionSections/${versionID}/${section.$key}`).update({
      title: section.title,
      icon: section.icon,
      itemList: section.itemList
    });
  }
  removeSectionList(versionID: string){
    this.af.database.list(`/versionSections/${versionID}`).remove();
  }
}

import { Component, OnInit, EventEmitter, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/switchMap';
import { TranslatePipe } from '../../shared/translate/translate.pipe';
import { TranslateService } from '../../shared/translate/translate.service';
import { TranslateComponent } from '../../shared/translate/translate.component';
import { ResumeVersionService } from '../../core/resume-version.service';
import { PersonalInfo } from '../../shared/models/personal-info';
import { Section } from '../../shared/models/section';
import { ResumeVersion } from '../../shared/models/resume-version';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';


@Component({
  selector: 'version-detail',
  templateUrl: './version-detail.component.html',
  styleUrls: ['./version-detail.component.css']
})
export class VersionDetailComponent implements OnInit, AfterViewInit {
    @ViewChild(PersonalInfoComponent)
    personalInfoComponent: PersonalInfoComponent;
    sectionList: Section[] = [];
    versionObservable: FirebaseObjectObservable<ResumeVersion>;    
    version: ResumeVersion = new ResumeVersion();
    constructor(
        private route : ActivatedRoute,
        private _versionService: ResumeVersionService, 
        private _translateSevice: TranslateService       
    ){  }
    ngAfterViewInit(){
        this.personalInfoComponent.personalInfo = this.version.personalInfo;
    }
    ngOnInit(){    
        if (this.route.snapshot.params['id'] != "new"){
            this.version = this._versionService.getVersion(this.route.snapshot.params['id']);
            if( !this.version.sectionList){
                this.version.sectionList = [];
            }
        }                       
        // this.route.data
        //     .subscribe( data => {
        //         console.log(data['version']);
        //         this.version = data['version']? data['version']: new ResumeVersion(); 
        //     });                   
    }    
    addSection(s:Section){
        let section = new Section(s.title, s.icon, s.type, []);
        this.version.sectionList.push(section);
	  }
    removeSection(index: number){        
        this.version.sectionList.splice(index,1);
    }
    saveVersion(){
        if(this.personalInfoComponent.checkValidation()){
          if( this.version.$key != ""){
              this._versionService.updateVersion(this.version);            
          }
          else{
              this._versionService.addVersion(this.version);
          }
        }else{
            confirm("check Personal Info Entery");
        }
                        
    }
    
    // sectionListValidation(){
    //     let flag = true;
    //     this.version.sectionList.forEach((section: Section) =>{
    //         if( section.itemList.length == 0 ){
    //             if(confirm(`Cannot Save The ${section.type} Section don't have any item!`)){                    
    //                 flag = false;              
    //             }  
    //             else{
    //                 flag = false;                    
    //             }                                                    
    //         }
    //     });
    //     return flag;
    // }
}

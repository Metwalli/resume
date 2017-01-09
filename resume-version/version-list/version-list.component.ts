import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { Router, Routes, Params, CanActivate, ActivatedRoute,
         RouterStateSnapshot, NavigationExtras, RouterModule } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { TranslatePipe } from '../../shared/translate/translate.pipe';
import {ResumeVersionService} from '../../core/resume-version.service';
import {ResumeVersion} from '../../shared/models/resume-version';
import { Section } from '../../shared/models/section';

@Component({    
    selector: 'version-list',
    templateUrl: './version-list.component.html',
    styles: ['./version-list.component.css']
})

export /**
 * ResumeVersionListComponent
 */
class VersionListComponent implements OnInit{   
    // #TODO: Create outlet to change version basic info {name, language, direction, ..} 
    versionList: FirebaseListObservable<ResumeVersion[]>;
    constructor(        
        private router: Router,        
        private _versionService: ResumeVersionService,
        private af: AngularFire
        ) {  }
    ngOnInit(){
        // #TODO: move this condition to router gaurd
        // #TODO: router         
        if (this._versionService.user){  
            this.versionList = this._versionService.getUserVersionList();  
        }                     
    }

    addVersion(){        
        // let version = new ResumeVersion();        
        
        // let navigationExtras: NavigationExtras = {
        //     queryParams: { 'userID': this.userID, 'versionID': "new", 'version': version },
        // };
        let link = ['/resume-version', "new"];
        this.router.navigate(link);
	}
    editeVersion(version: any){   
        this._versionService.currentVersion = version;              
        let link = ['/resume-version', version.$key];
        //debugger;
        this.router.navigate(link);
    }
    duplicateVersion(version: ResumeVersion){
        //version.name = version.name + "Copy";
        this._versionService.addVersion(version)        
    }
    deleteVersion(key: string){
        if(confirm("Are You Sure to Remove this Section!" )){
            this.versionList.remove(key);
        }        
    }
    viewVersionTemplate(version: ResumeVersion){
        this._versionService.currentVersion = version;
        this.router.navigate(['/resume-template']);
    }
}

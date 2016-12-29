import {Resolve, ActivatedRouteSnapshot } from "@angular/router";
import {Injectable} from "@angular/core";
import { FirebaseObjectObservable } from 'angularfire2';
import {ResumeVersionService} from './resume-version.service';
import { ResumeVersion } from '../shared/models/resume-version';


@Injectable()
export class ResumeVersionResolve implements Resolve<ResumeVersion> {
    //version: FirebaseObjectObservable<ResumeVersion>;
    constructor(private _versionService: ResumeVersionService) { }
    resolve(route:ActivatedRouteSnapshot) { 
        if ( this._versionService.user && route.params['id'] != 'new')  
        {
            return this._versionService.getVersion(route.params['id']);
                //.subscribe(version => this.version = version);
        }             
       //debugger;
       //return this.version;                           
    }
}
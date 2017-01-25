import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseAuthState, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AuthService {
  public user: FirebaseAuthState;
  public redirectUrl: string;

  constructor(
    private af: AngularFire,
    private router: Router
  ) {
    this.af.auth.subscribe(auth => this.user = auth);
  }
  public signUp(email: string, pwd: string): any{
    return this.af.auth.createUser({email: email, password: pwd});
  }
  public loginByEmail(email: string, pwd: string): any{
    return this.af.auth.login(
      {
        email: email, 
        password: pwd
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }
  public login(provider: string) {
    switch(provider){
      case "google":{
        this.af.auth.login({
          provider: AuthProviders.Google,
          method: AuthMethods.Redirect,
        });
        break;
      }
      case "facebook":{
        this.af.auth.login({
          provider: AuthProviders.Facebook,
          method: AuthMethods.Redirect,
        });
        break;
      } 
      case "twitter":{
        this.af.auth.login({
          provider: AuthProviders.Twitter,
          method: AuthMethods.Redirect,
        });
        break;
      }
      case "github":{
        this.af.auth.login({
          provider: AuthProviders.Github,
          method: AuthMethods.Redirect,
        });
        break;
      }
      case "anonymous":{
        this.af.auth.login({
          provider: AuthProviders.Anonymous,
          method: AuthMethods.Anonymous,
        });
        break;
      }
    }    
  }
  
  public logout() {
    this.af.auth.logout();   
    this.router.navigate(['/home']);
  }

  resetPassword(email: string): any {
      return firebase.auth().sendPasswordResetEmail(email);
  }
}

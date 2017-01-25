import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { TranslatePipe } from '../shared/translate/translate.pipe';
import { TranslateService } from '../shared/translate/translate.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {  
  title: string = "Login";
  public loginForm: any;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  public loginError: boolean = false;

  constructor(public authService: AuthService, public router: Router, 
    public translateService: TranslateService, public formBuilder: FormBuilder) {
    if (this.authService.user){
      let url = this.authService.redirectUrl? this.authService.redirectUrl: '/home';
      this.router.navigate([url]);
    }else{
      this.loginForm = formBuilder.group({
        'email': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
      });
    }      
  }
  ngOnInit(){}
  elementChanged(field: any){
    this[field.name + "Changed"] = true;
  }
  login(provider: string){
    this.authService.login(provider);
  }
  loginByEmail(){
    this.submitAttempt = true;
    if (!this.loginForm.valid){
        console.log(this.loginForm.value);
    } else {
        this.authService.loginByEmail(this.loginForm.value.email, this.loginForm.value.password)
          .then(auth => {
              this.router.navigate(['home']);
            },error => {
              this.loginError = true;
            }
          );
    }
  }

  resetPassword(){
    this.router.navigate(['reset-password']);
  }

  createAccount(){
    this.router.navigate(['sign-up']);
  }

}

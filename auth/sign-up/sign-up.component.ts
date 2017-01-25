import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { TranslatePipe } from '../../shared/translate/translate.pipe';
import { TranslateService } from '../../shared/translate/translate.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    title: string = 'Sing Up';
    public signupForm;
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;

    constructor(public authService: AuthService, public router: Router,
                public translateService: TranslateService, public formBuilder: FormBuilder) {
      this.signupForm = formBuilder.group({
        'email': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }

    /**
    * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
    */
    elementChanged(field: any){        
        this[field.name + "Changed"] = true;
    }

    /**
    * If the form is valid it will call the AuthData service to sign the user up password displaying a loading
    * component while the user waits.
    *
    * If the form is invalid it will just log the form value, feel free to handle that as you like.
    */
    signup(){
        this.submitAttempt = true;

        if (!this.signupForm.valid){
            console.log(this.signupForm.value);
        } else {
            this.authService.signUp(this.signupForm.value.email, 
              this.signupForm.value.password).then(() => {
                  this.router.navigate(['home']);;
              }, (error) => {
                console.log("Cannot Create Userr");
              });      
        }
    }
  ngOnInit() {  }
  
  cancel(){
    this.router.navigate(['home']);
  }
}

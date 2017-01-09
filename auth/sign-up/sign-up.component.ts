import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { TranslatePipe } from '../../shared/translate/translate.pipe';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signupForm;
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;

    constructor(public authService: AuthService, public router: Router,
      public formBuilder: FormBuilder) {
      this.signupForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }

    /**
    * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
    */
    elementChanged(input){
        let field = input.inputControl.name;
        this[field + "Changed"] = true;
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
  ngOnInit() {
  }
  
  cancel(){
    this.router.navigate(['home']);
  }
}

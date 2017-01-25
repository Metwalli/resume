import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { TranslatePipe } from '../../shared/translate/translate.pipe';
import { TranslateService } from '../../shared/translate/translate.service';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    title: string = 'Reset Password';
  public resetPasswordForm;
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;

    constructor(public authService: AuthService, public formBuilder: FormBuilder,
                public translateService: TranslateService, public router: Router) {

            this.resetPasswordForm = formBuilder.group({
                'email': ['', Validators.compose([Validators.required])]
            })
    }

    /**
    * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
    */
    elementChanged(field: any){        
        this[field.name + "Changed"] = true;
    }

    /**
    * If the form is valid it will call the AuthData service to reset the user's password displaying a loading
    * component while the user waits.
    *
    * If the form is invalid it will just log the form value, feel free to handle that as you like.
    */

    resetPassword(){
        this.submitAttempt = true;

        if (!this.resetPasswordForm.valid){
            console.log(this.resetPasswordForm.value);
        } else {
            this.authService.resetPassword(this.resetPasswordForm.value.email)
                .then(auth => {
                        console.log("send")
                    },error => {
                        console.log("don't send");
                    }
                );
        }
    }
  ngOnInit() {
  }
  createAccount(){
    this.router.navigate(['sign-up']);
  }

}

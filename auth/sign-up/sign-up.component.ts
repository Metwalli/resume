import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../shared/translate/translate.pipe';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  pwd: string;
  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }
  signUp(){
    this.authService.signUp(this.email, this.pwd);
  }
  cancel(){
    
  }
}

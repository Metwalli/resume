import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./styles.css','./font_style.css','./style_rtl.css','./dialog.css']
})
export class HomeComponent  {

  constructor(private authService: AuthService) { }

 

  
}

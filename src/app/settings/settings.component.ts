import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(public loginService: LoginService, public router: Router){}

  logout(){
    this.loginService.deleteToken();
    this.router.navigateByUrl("/")
  }
}

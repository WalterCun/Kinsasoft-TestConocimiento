import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(public loginService: LoginService, public router: Router) {}

  login() {
    const userData: any = {username: this.username, password: this.password};

    this.loginService.login(userData).subscribe(data => {
      this.loginService.saveToken(data.token);
      this.router.navigateByUrl("settings");
    },
    error => {
      console.log("Error de Peticion de Servidor :",error)
      this.router.navigateByUrl("settings");
      this.username = '';
      this.password = '';
    }
    );

  }

  ngOnInit(){
    this.login
  }

}

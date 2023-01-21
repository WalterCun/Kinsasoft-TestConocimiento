import { HttpClientModule } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: "root"
})
export class LoginService {


  base: string= 'https://back.test.kimsabot.com/';

  constructor(private http: HttpClient, private cookies: CookieService) {
  }

  login({ user }: { user: any }): Observable<any> {
    return this.http.post(this.base + 'auth/login', user);
  }

  deleteToken(){
    this.cookies.delete("token");
  }

  saveToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { viewClassName } from '@angular/compiler';
import { SampleServiceService } from 'app/services/sample-service.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;
  isInvalidCredentials = false;
  userDetails: any;

  constructor(private router: Router, private readonly sampleService: SampleServiceService) {}

  login(): void {
    this.isInvalidCredentials = false;
    this.sampleService.login(this.email, this.password).subscribe((data) => {
      if (data.statuscode === 200) {
        this.userDetails = this.parseJwt(data.data.authtoken);
        console.log(this.userDetails);
        this.sampleService.isAuthenticated();
        this.router.navigate(['/main'], { queryParams: { name: this.userDetails.sub } });
      } else {
        this.isInvalidCredentials = true;
      }
    });
  }

  checkJWTtokens(user: any): void {
    this.userDetails = jwt_decode(user.data.authtoken);
    this.sampleService.setUserDetails(this.userDetails);
  }

  parseJwt(token): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  }
}

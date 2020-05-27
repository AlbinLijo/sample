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

  constructor(private router: Router, private readonly sampleService: SampleServiceService) {}

  login(): void {
    this.isInvalidCredentials = false;
    this.sampleService.login(this.email, this.password).subscribe((data) => {
      if (data.statuscode === 200) {
        this.checkJWTtokens(data);
        this.sampleService.isAuthenticated();
        this.router.navigate(['/main']);
      } else {
        this.isInvalidCredentials = true;
      }
    });
  }

  checkJWTtokens(user: any): void {
      const userDetails =  jwt_decode(user.data.authtoken);
      console.log(userDetails);
      this.sampleService.setUserDetails(userDetails);
    }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class SampleServiceService {
  userDetails: any;
  authenticated = false;
  private readonly routePrefix = 'http://default.condo-v3-dev.condobutlers.com:8888';

  constructor(private httpClient: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('X-TenantId', 'default');
    const apiUrl = `${this.routePrefix}/security/api/v1/usermanagement/login`;
    return this.httpClient.post<any>(
      apiUrl,
      {
        password: password,
        username: name,
      },
      { headers: headers },
    );
  }

  isAuthenticated(): boolean {
    this.authenticated = true;
    return true;
  }

  setUserDetails(user: any): any {
    console.log(user);
    this.userDetails = JSON.stringify(user);
    console.log(this.userDetails);
    return user;
  }

  getAllCondoInfo(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('X-TenantId', 'default');
    const apiUrl = `${this.routePrefix}/condoservices/api/v1/condoinfo`;
    return this.httpClient.get<any>(apiUrl, { headers: headers });
  }

  getUserUnits(name: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers
      .set('X-TenantId', 'default')
      .set('X-PropertyCode', '36572524-62ab-41b7-8f0a-ab7d68297b05')
      .set('User', 'amal')
      .set('ReferenceId', 'MA-006')
      .set('AccessMode', 'view');
    const apiUrl = `${this.routePrefix}/condoservices/api/v1/user/${name}/units`;
    return this.httpClient.get<any>(apiUrl, { headers: headers });
  }
}

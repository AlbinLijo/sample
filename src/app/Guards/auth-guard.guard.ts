import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SampleServiceService } from 'app/services/sample-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private readonly sampleService: SampleServiceService, private readonly router: Router) {}
  canActivate(): boolean {
    if (!this.sampleService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}

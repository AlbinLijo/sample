import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { SampleServiceService } from 'app/services/sample-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
  public menuItems = [
    {
      state: 'main',
      icon: 'apps',
      name: 'Dashboard',
    },
    {
      state: 'main',
      icon: 'apps',
      name: 'Dashboard',
    },
    {
      state: 'main',
      icon: 'apps',
      name: 'Dashboard',
    },
    {
      state: 'main',
      icon: 'apps',
      name: 'Dashboard',
    },
    {
      state: 'main',
      icon: 'apps',
      name: 'Dashboard',
    },
  ];

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;
  user: string;
  constructor(private readonly sampleService: SampleServiceService) {
    this.user = this.sampleService.userDetails;
    console.log(this.user)
  }
  mouseenter(): void {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave(): void {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logout(): void {
    this.sampleService.authenticated = false;
    this.sampleService.userDetails = null;
  }
}

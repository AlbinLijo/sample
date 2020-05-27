import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from 'app/services/sample-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public condoInfo: any = {};
  public userUnits: any = {};
  constructor(private readonly _sampleService: SampleServiceService) {}

  ngOnInit(): void {
    this._sampleService.getAllCondoInfo().subscribe((data) => {
      this.condoInfo = data;
    });

    this._sampleService.getUserUnits().subscribe((data) => {
      this.userUnits = data;
    });
  }
}

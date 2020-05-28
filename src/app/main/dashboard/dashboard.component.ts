import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from 'app/services/sample-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public condoInfo: any = {};
  public userUnits: any = {};
  name: string;
  constructor(
    private readonly _sampleService: SampleServiceService,
    private readonly _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.name = queryParams['name'];
    });
    this._sampleService.getAllCondoInfo().subscribe((data) => {
      this.condoInfo = data;
    });

    this._sampleService.getUserUnits(this.name).subscribe((data) => {
      this.userUnits = data;
    });
  }
}

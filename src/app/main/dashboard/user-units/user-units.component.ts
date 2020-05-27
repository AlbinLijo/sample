import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-units',
  templateUrl: './user-units.component.html',
  styleUrls: ['./user-units.component.scss'],
})
export class UserUnitsComponent implements OnInit {
  @Input() userUnits: any;
  constructor() {}

  ngOnInit(): void {}
}

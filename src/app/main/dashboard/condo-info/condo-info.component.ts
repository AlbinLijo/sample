import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-condo-info',
  templateUrl: './condo-info.component.html',
  styleUrls: ['./condo-info.component.scss'],
})
export class CondoInfoComponent implements OnInit {
  @Input() condoInfo: any;
  constructor() {}

  ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule, MatCardHeader } from '@angular/material/card';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { SampleServiceService } from 'app/services/sample-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CondoInfoComponent } from './dashboard/condo-info/condo-info.component';
import { UserUnitsComponent } from './dashboard/user-units/user-units.component';
import { HappeningsComponent } from './dashboard/happenings/happenings.component';
import { BroadcastComponent } from './dashboard/broadcast/broadcast.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    ChartsComponent,
    CondoInfoComponent,
    UserUnitsComponent,
    HappeningsComponent,
    BroadcastComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatCardModule,
    FlexLayoutModule,
    FlexModule,
    MatIconModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class MainModule {}

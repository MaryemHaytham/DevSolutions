import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { MainComponent } from './main/main.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportsComponent } from './reports/reports.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { ViewDialogComponent } from './reports/view-dialog/view-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    FeaturesComponent,
    MainComponent,
    AnalyticsComponent,
    ReportsComponent,
    NavbarComponent,
    SidebarComponent,
    ViewDialogComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
   SharedModule,
   MatDialogModule
 
   
  ]
})
export class FeaturesModule { }

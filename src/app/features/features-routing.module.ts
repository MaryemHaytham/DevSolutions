import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MainComponent } from './main/main.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [ 
  {
    path: '',
    component: MainComponent,  
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' }, 
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'orders', component: ReportsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

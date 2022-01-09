import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlotsRoutingModule } from './barChart-routing.module';
import { BarPageComponent } from './pages/bar-page/bar-page.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BarFormComponent } from './components/bar-form/bar-form.component';
import { ChartModule } from 'primeng/chart';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../PrimeNgModule/prime-ng.module';
import { InfoComponent } from './components/info/info.component';





@NgModule({
  declarations: [
    BarPageComponent,
    BarChartComponent,
    BarFormComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    PlotsRoutingModule,
    ChartModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class PlotsModule { }

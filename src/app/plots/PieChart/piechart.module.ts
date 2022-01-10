import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiechartRoutingModule } from './piechart-routing.module';
import { PiePageComponent } from './pages/pie-page/pie-page.component';
import { PieFormComponent } from './components/pie-form/pie-form.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { InfoPieComponent } from './components/info-pie/info-pie.component';
import { ChartModule } from 'primeng/chart';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../PrimeNgModule/prime-ng.module';


@NgModule({
  declarations: [
    PiePageComponent,
    PieFormComponent,
    PieChartComponent,
    InfoPieComponent
  ],
  imports: [
    CommonModule,
    PiechartRoutingModule,
    ChartModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class PiechartModule { }

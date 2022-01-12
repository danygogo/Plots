import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [{
  path: "",
  component: MainPageComponent,
  children: [
    
    {
      path: "home",
      loadChildren: () => import("../home/home.module").then(m => m.HomeModule)
      
    }, 
    {
      path: "bar",
      loadChildren: () => import('../plots/barChart/barChart.module').then(m => m.PlotsModule)
    },
    {
      path: "pie",
      loadChildren: () => import('../plots/PieChart/piechart.module').then(m => m.PiechartModule)
    }
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }

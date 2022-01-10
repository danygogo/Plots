import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './notFound/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "bar",
    loadChildren: () => import('./plots/barChart/barChart.module').then(m => m.PlotsModule)
  },
  {
    path: "pie",
    loadChildren: () => import('./plots/PieChart/piechart.module').then(m => m.PiechartModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

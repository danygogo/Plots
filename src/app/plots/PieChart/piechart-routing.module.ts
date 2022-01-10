import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiePageComponent } from './pages/pie-page/pie-page.component';


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "piechart",
        component: PiePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PiechartRoutingModule { }

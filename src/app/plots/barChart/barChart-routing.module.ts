import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarPageComponent } from './pages/bar-page/bar-page.component';



const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "barchart",
        component: BarPageComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlotsRoutingModule { }

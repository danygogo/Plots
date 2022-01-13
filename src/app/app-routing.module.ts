import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './notFound/not-found/not-found.component';


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "application",
    loadChildren: () => import("./main-page/main-page.module").then(m => m.MainPageModule)
  }, 
  {
    path: "**",
    redirectTo: "auth"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

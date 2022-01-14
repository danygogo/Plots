import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "application",
    loadChildren: () => import("./main-page/main-page.module").then(m => m.MainPageModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
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

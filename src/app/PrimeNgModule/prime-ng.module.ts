import { NgModule } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';






@NgModule({

  exports: [
    DialogModule,
    ButtonModule,
  ]
})
export class PrimeNgModule { }

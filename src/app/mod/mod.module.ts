import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModRoutingModule } from './mod-routing.module';
import { ApiCallComponent } from './api-call/api-call.component';


@NgModule({
  declarations: [
    ApiCallComponent
  ],
  imports: [
    CommonModule,
    ModRoutingModule
  ],
  exports: [
    ApiCallComponent
  ]
})
export class ModModule { }

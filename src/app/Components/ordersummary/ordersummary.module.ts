import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersummaryRoutingModule } from './ordersummary-routing.module';
import { OrdersummaryComponent } from './ordersummary.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    OrdersummaryComponent
  ],
  imports: [
    CommonModule,
    OrdersummaryRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class OrdersummaryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    OrdersComponent,
    //DetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class OrdersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsuccessfulRoutingModule } from './paymentsuccessful-routing.module';
import { PaymentsuccessfulComponent } from './paymentsuccessful.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PaymentsuccessfulComponent
  ],
  imports: [
    CommonModule,
    PaymentsuccessfulRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class PaymentsuccessfulModule { }

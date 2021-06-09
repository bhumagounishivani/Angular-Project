import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegProductsRoutingModule } from './veg-products-routing.module';
import { VegProductsComponent } from './veg-products.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    VegProductsComponent
  ],
  imports: [
    CommonModule,
    VegProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class VegProductsModule { }

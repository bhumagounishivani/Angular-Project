import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { FruitComponent } from './fruit.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    FruitComponent,
  ],
  imports: [
    CommonModule,
    FruitRoutingModule,
    MatCardModule,
    FlexLayoutModule,

  ]
})
export class FruitModule { }

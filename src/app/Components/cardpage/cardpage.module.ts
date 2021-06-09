import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardpageRoutingModule } from './cardpage-routing.module';
import { CardpageComponent } from './cardpage.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    CardpageComponent
  ],
  imports: [
    CommonModule,
    CardpageRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class CardpageModule { }

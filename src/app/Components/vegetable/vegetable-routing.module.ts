import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegetableComponent } from './vegetable.component';

const routes: Routes = [
  {path:'',component:VegetableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegetableRoutingModule { }

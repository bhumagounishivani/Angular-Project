import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegProductsComponent } from './veg-products.component';

const routes: Routes = [
  {path:'',component:VegProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegProductsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsuccessfulComponent } from './paymentsuccessful.component';

const routes: Routes = [
  {path:'',component:PaymentsuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsuccessfulRoutingModule { }

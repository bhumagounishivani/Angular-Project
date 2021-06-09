import { Component, OnInit } from '@angular/core';
import { tokenGetter2 } from 'src/app/app.module';

@Component({
  selector: 'app-paymentsuccessful',
  templateUrl: './paymentsuccessful.component.html',
  styleUrls: ['./paymentsuccessful.component.css']
})
export class PaymentsuccessfulComponent implements OnInit {

  constructor() { }
  transaction_num:any;
  price:any;
  ngOnInit(): void {
    this.transaction_num=Math.floor(100000 + Math.random() * 900000000000);
    this.price=tokenGetter2();
  }

}

import { Component, OnInit } from '@angular/core';
import { tokenGetter2 } from 'src/app/app.module';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {

  constructor() { 
  }
  price:any;
  strprice='';
  ngOnInit(): void {
    this.strprice=tokenGetter2() || '';
    this.price=parseInt(this.strprice,10)
    localStorage.setItem('price',this.price+77);
  }

}

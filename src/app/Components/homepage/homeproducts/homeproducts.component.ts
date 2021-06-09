import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/products.json';

@Component({
  selector: 'app-homeproducts',
  templateUrl: './homeproducts.component.html',
  styleUrls: ['./homeproducts.component.css']
})
export class HomeproductsComponent implements OnInit {

  constructor() { }

  products:any=(data as any).default;
  ngOnInit(): void {
  }

  

}

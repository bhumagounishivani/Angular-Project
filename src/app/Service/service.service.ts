import {  Injectable } from '@angular/core';
import * as prod from '../../assets/fruits.json';
import * as veg_prod from '../../assets/vegetable.json';
import * as order_data from '../../assets/orders.json';
import * as user_data from '../../assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{
  products:  any  = (prod  as  any).default;

  veg_products:  any  = (veg_prod  as  any).default;

  orders:any=(order_data as any).default;

  users:any=(user_data as any).default;
  constructor() { 
  }


}

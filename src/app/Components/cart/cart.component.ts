import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as d from '../../../assets/cart.json';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  data:any=(d as any).default;
  columns:string[]=['product','quan','price','button'];
  quan=new Array();
  price:any=0;
  constructor(private route:Router) { }

  ngOnInit(): void {
    for(let d of this.data){
      this.price+=parseInt(d.cost,10);
      this.quan.push("1");
    }
    console.log(this.data)
  }

  getQuan(element:any,$event:any){
    console.log(element);
    for(let [i,user] of this.data.entries()){
      if(element.id==user.id){
        let text = $event.target.options[$event.target.options.selectedIndex].text;
        this.price+=(parseInt(text,10)-parseInt(this.quan[i],10))*parseInt(element.cost,10);
        this.quan[i]=text;
        console.log(this.price);
        break;
      }
    }
  }
  
  deleteRow(element:any){
    this.data=JSON.parse(JSON.stringify(this.data));
    for (let [i, user] of this.data.entries()) {
      if (user.id == element.id) {
          this.data.splice(i, 1);
          break;
      }
   }
  }

  shopping(){
    this.route.navigateByUrl('/home');
  }

  makeprice(){
    if(localStorage.getItem('token')){
      localStorage.setItem('price',this.price);
      this.route.navigateByUrl('/ordersummary');
    }
  }


}

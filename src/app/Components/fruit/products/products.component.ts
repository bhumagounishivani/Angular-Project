import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private data:ServiceService) { 
  }
  products:any=this.data.products;
  fruit:any;
  price:any;
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    for(const p of this.products){
      if(p.id==id){
        this.fruit=p;
        break;
      }
    }
    this.price=this.fruit.price;
  }

  pricecall($event:any){
    this.price=parseInt($event.target.options[$event.target.options.selectedIndex].text,10)*this.fruit.price;
   }
 
   callPrice(){
     if(localStorage.getItem('token')){
       localStorage.setItem('price',this.price);
     }
   }
 

}

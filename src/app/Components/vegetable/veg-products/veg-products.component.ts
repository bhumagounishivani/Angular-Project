import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-veg-products',
  templateUrl: './veg-products.component.html',
  styleUrls: ['./veg-products.component.css']
})
export class VegProductsComponent implements OnInit {

  constructor(private data:ServiceService,private route:ActivatedRoute) { }
  products:any=this.data.veg_products;
  veg:any;
  price:any;
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    for(const p of this.products){
      if(p.id==id){
        this.veg=p;
        break;
      }
    }
    this.price=this.veg.price;
  }

  pricecall($event:any){
   this.price=parseInt($event.target.options[$event.target.options.selectedIndex].text,10)*this.veg.price;
  }

  callPrice(){
    if(localStorage.getItem('token')){
      localStorage.setItem('price',this.price);
    }
  }

}

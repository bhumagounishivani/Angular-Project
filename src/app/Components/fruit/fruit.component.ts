import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  
  constructor(private data:ServiceService) { }

  ngOnInit(): void {
  }
  products:any=this.data.products;
  starList: boolean[] = [true,true,true,true,true]; 
  setStar(d:any){                             
    for(var i=0;i<=4;i++){  
      if(i<d){  
        this.starList[i]=false;  
      }  
      else{  
        this.starList[i]=true;  
      }  
    }  
  }  


}

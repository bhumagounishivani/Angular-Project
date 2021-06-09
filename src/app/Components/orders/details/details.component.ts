import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tokenGetter } from 'src/app/app.module';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,AfterContentChecked {

  constructor(private data:ServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  order:any;
  user:any;
  ngAfterContentChecked(){
    var id=this.route.snapshot.paramMap.get('id');
    for(let i of this.data.orders){
      if(i.id==id){
        this.order=i;
        break;
      }
    }
    for(let i of this.data.users){
      if(i.email==tokenGetter()){
        this.user=i;
        break;
      }
    }
  }

}

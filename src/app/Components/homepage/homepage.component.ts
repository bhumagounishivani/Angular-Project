import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  index:any=1;
  constructor() { }

  ngOnInit(): void {
    this.showslide(this.index);
  }

  showslide(n:any){
    var slides=document.getElementsByClassName("slides");
    var dots=document.getElementsByClassName("dot");
    if(n<1){
        this.index=slides.length;
    }
    if(n>slides.length){
        this.index=1;
    }
    for(var i=0;i<slides.length;i++){
      slides[i].setAttribute("style","display:none");
    }
    for(var i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active_dots","");
    }
    slides[this.index-1].setAttribute("style","display:block");
    dots[this.index-1].className+=" active_dots";
  }
  

  calslides(n:any){
      this.showslide(this.index+=n);
  }
  currslide(n:any){
      this.showslide(this.index=n);
  }

}

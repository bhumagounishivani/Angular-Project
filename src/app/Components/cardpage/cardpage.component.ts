import { formatDate } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tokenGetter2 } from 'src/app/app.module';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent implements OnInit {

  constructor(private data:ServiceService,private route:Router) { }

  ngOnInit(): void {
    console.log(tokenGetter2());
  }


  displaycard(){
    document.getElementById('cardinfo')?.setAttribute('style','display:block');
    document.getElementById('paypalinfo')?.setAttribute('style','display:none');
  }

  displaypaypal(){
    document.getElementById('cardinfo')?.setAttribute('style','display:none');
    document.getElementById('paypalinfo')?.setAttribute('style','display:block');
  }

  form1=new FormGroup({
    fullname: new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern("[a-zA-Z ]*")]),
    cardno: new FormControl('', [Validators.required]),
    expiry: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  },
  {validators:[this.validation]},
  )

  validation(c: AbstractControl){

    if ( (c.get('cardno')?.value[0]=='4' || c.get('cardno')?.value[0]=='5' || c.get('cardno')?.value[0]=='6') && c.get('cardno')?.value.length!=16 && !c.hasError('InvalidCard','cardno')) {

      c.get('cardno')?.setErrors({LengthMismatch: true});

    }
    else if(c.get('cardno')?.value[0]=='3'&&( c.get('cardno')?.value[1]=='7' ||  c.get('cardno')?.value[1]=='4') && c.get('cardno')?.value.length!=15 && !c.hasError('InvalidCard','cardno')){
      c.get('cardno')?.setErrors({LengthMismatch: true});
    }

    else if(c.get('cardno')?.value[0]!='4' && c.get('cardno')?.value[0]!='5' && c.get('cardno')?.value[0]!='6' && c.get('cardno')?.value[0]!='3' && !c.hasError('required','cardno')){
      c.get('cardno')?.setErrors({InvalidCard: true});
    }

    if(c.get('expiry')?.value!="" &&  formatDate(c.get('expiry')?.value,'yyyy-MM','en_US')<formatDate(new Date(),'yyyy-MM','en_US') && !c.hasError('required','expiry')){
      c.get('expiry')?.setErrors({InvalidDate: true});
      //console.log(formatDate(c.get('expiry')?.value,'yyyy-MM-dd','en_US'));
    }

    if(c.get('password')?.value.length!=3 && !c.hasError('required','password')){
      c.get('password')?.setErrors({InvalidCVV:true});
    }
    return null;
    
  }

  onSubmit(){
    if(this.form1.valid){
      console.log("Success");
      this.route.navigateByUrl('/success');
    }
  }



}

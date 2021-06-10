import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { tokenGetter } from 'src/app/app.module';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,AfterContentChecked{

  constructor(private data:ServiceService) { }

  user:any;
  isActive=true;
  add=false;
  address=false;
  phoneno = false;
  phone = false;
  password=false;
  ngOnInit(): void {
  }
  ngAfterContentChecked(){
    for(var users of this.data.users){
      if(users.email==tokenGetter()){
        this.user=users;
        if(this.user.hasOwnProperty('address') && this.user.address!="" ){
          this.address=true;
        }
        if(this.user.hasOwnProperty('phonenumber') && this.user.phonenumber!="" ){
          this.phoneno=true;
        }
        if(this.user.hasOwnProperty('password') && this.user.password!="" ){
          this.password=true;
        }
        break;
      }
    }
    if(this.address){
      document.getElementById('address')?.setAttribute('style','display:none');
    }
    if(this.phoneno){
      document.getElementById('phone')?.setAttribute('style','display:none');
    }
  }

  displayname(){
    document.getElementById('buttonuser')?.setAttribute('style','display:none');
    document.getElementsByClassName('infouser')[0]?.setAttribute('style','display:none');
    document.getElementById('Name')?.setAttribute('style','display:inline');
    document.getElementById('Button')?.setAttribute('style','display:inline');
  }

  displaypass(){
    document.getElementById('buttonpass')?.setAttribute('style','display:none');
    document.getElementsByClassName('infopass')[0]?.setAttribute('style','display:none');
    document.getElementById('Password')?.setAttribute('style','display:inline');
    document.getElementById('Button')?.setAttribute('style','display:inline');
  }

  display(){
    document.getElementById('on')?.setAttribute('style','display:none');
    document.getElementById('off')?.setAttribute('style','display:inline');
    this.isActive=false;
  }

  notdisplay(){
    document.getElementById('off')?.setAttribute('style','display:none');
    document.getElementById('on')?.setAttribute('style','display:inline');
    this.isActive=true;
  }

  displayphone(){
    this.phone = false;
    document.getElementById('buttonphone')?.setAttribute('style','display:none');
    document.getElementsByClassName('infophone')[0]?.setAttribute('style','display:none');
    document.getElementById('Phoneno')?.setAttribute('style','display:inline');
    document.getElementById('Button')?.setAttribute('style','display:inline');
    document.getElementById('phone')?.setAttribute('style','display:none');
  }
  addphone(){
    this.add=true;
    document.getElementById('phone')?.setAttribute('style','display:none');
    document.getElementById('Phoneno')?.setAttribute('style','display:inline');
    document.getElementById('Button')?.setAttribute('style','display:inline');
    document.getElementById('buttonphone')?.setAttribute('style','display:none');
  }

  submit(){
    for(var users of this.data.users){
      if(users.email==tokenGetter()){
        this.user=users;
        break;
        //console.log(this.user);
      }
    }
  }
  addaddress(){
    this.add=true;
    document.getElementById('address')?.setAttribute('style','display:none');
    document.getElementById('Address')?.setAttribute('style','display:inline');
    document.getElementById('Button')?.setAttribute('style','display:inline');
    document.getElementById('buttonaddress')?.setAttribute('style','display:none');
  }

  displayaddress(){
    this.add=false;
    document.getElementById('buttonaddress')?.setAttribute('style','display:none');
    document.getElementsByClassName('infoaddress')[0]?.setAttribute('style','display:none');
    document.getElementById('Address')?.setAttribute('style','display:inline');
    document.getElementById('Button')?.setAttribute('style','display:inline');
    document.getElementById('address')?.setAttribute('style','display:none');
  }

}
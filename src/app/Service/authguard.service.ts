import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public auth:AuthserviceService,public router:Router) { }
  canActivate(): boolean{
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/home']);
      alert("You are not logged in...");
      return false;
    }
    return true;
  }

}

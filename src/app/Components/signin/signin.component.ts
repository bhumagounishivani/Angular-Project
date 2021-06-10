import { Component, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup ,ValidationErrors,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  name_val:any;
  service: any;
  //@Output() event=new EventEmitter<string>();
  public user: SocialUser = new SocialUser;
  signingoogle=false;
  constructor(private route:Router,private data:ServiceService,private authService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.signingoogle=true;
      localStorage.setItem('token',this.user.email);
      localStorage.setItem('name',this.user.firstName);
      localStorage.setItem('type',"Google");
      this.route.navigateByUrl('/home');
      console.log(user);
    });
  }

  form1=new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('', [Validators.required]),
  },
  {validators: [this.validate]}
  )
  form2= new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    username:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z0-9-_.]{1,20}")]),
    password: new FormControl('', [Validators.minLength(6),Validators.required]),
    repassword: new FormControl('',[Validators.minLength(6),Validators.required])
  },
    {validators:[this.match]}
  );

  validate(c: AbstractControl){
    var count=0,user;
    let injector = Injector.create([ { provide: ServiceService, useClass:ServiceService,deps: []}])
    let service = injector.get(ServiceService);
    for(let i of service.users){
      if(i.email!=c.get('email')?.value){
        count++;
      }
      else{
        user=i;
        break;
      }
    }
    if(count==service.users.length && !c.hasError('required','email')){
      c.get('email')?.setErrors({InvalidEmail: true});
    }
    if(c.hasError('InvalidEmail','email') && !c.hasError('required','password')){
      c.get('password')?.setErrors({InvalidPassword: true});
    }
    else if(count!=service.users.length){
      if(user.password!=c.get('password')?.value && !c.hasError('required','password')){
        c.get('password')?.setErrors({InvalidPassword: true});
      }
    }
    
    return null;
    
  }
  
  match(c: AbstractControl) : ValidationErrors| null{

    if (c.get('password')?.value !== c.get('repassword')?.value && !c.hasError('required','repassword') &&!c.hasError('minlength','repassword')) {

      c.get('repassword')?.setErrors({NoPassswordMatch: true});
    
    }
    return null;
    
  }

  onSubmit(){
    if(this.form1.valid||this.form2.valid){
      if(this.form1.valid){
        for(var users of this.data.users){
          if(users.email==this.form1.get('email')?.value){
            localStorage.setItem('token',users.email);
            localStorage.setItem('name',users.name);
            break;
          }
        }
      }
      else{
        localStorage.setItem('token',this.form2.get('email')?.value);
        localStorage.setItem('name',this.form2.get('username')?.value);
      }
      //localStorage.setItem('type',"Login")
      this.route.navigateByUrl('/home');
      return;
    }
  }

  public signInWithGoogle(): void {
    //console.log('hello')
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}


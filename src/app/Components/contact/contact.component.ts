import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  form= new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    username:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z0-9-_.]{1,20}")]),
    message:new FormControl('',[Validators.required])
  })

  submitForm(form:FormGroupDirective){
    if(confirm("Are you sure want to submit?")){
      form.resetForm();
    }
  }

}

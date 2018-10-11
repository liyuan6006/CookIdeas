import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup,FormBuilder,Validator, Validators } from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder, public user:UserService) {}

 
  ngOnInit() {
    this.loginForm = this.fb.group({
      email :['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
    //this.loginForm.valueChanges.subscribe(console.log);
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  onSubmit() {
    console.warn(this.loginForm);
  }
}

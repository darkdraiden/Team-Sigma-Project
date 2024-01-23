import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  email: string | undefined;
  pass: string | undefined;
  
  loginClick( )
  {
    email : this.email
    pass : this.pass
    console.log("login button click", this.email, this.pass )
  }
}
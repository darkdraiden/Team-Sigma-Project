import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from 'express';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import baseurl from '../../services/helper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  http: any;
  constructor(private userService :UserService, private router: Router)
  {
      
  }

  public user = {
    username : '', 
    password : ''
  }
  
  loginClick( )
  {
    username : this.user.username
    password : this.user.password
    console.log("login button click", this.user.username, this.user.password )

    // this.http.post(`${baseurl}/auth/login`, this.user).subscribe((res:any)=>{
    //   if(res.result)
    //   {
    //     alert("login success")
    //     localStorage.setItem('loginToken',res.data.token)
    //     // this.router.navigateByUrl("/")
    //   }
    //   else{
    //     alert(res.message + "something went wrong")
    //   }
    // })
  }
}
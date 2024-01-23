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
  [x: string]: any;
  // http: any;
  constructor(private http :HttpClient)
  {
      
  }

   user:any = {
    username : 'naman.c@consultadd.com', 
    password : '1234'
  }
  
  // loginClick( )
  // {
  //   // username : this.user.username
  //   // password : this.user.password
  //   console.log("login button click", this.user.username, this.user.password )

  //   this.http.post(`http://localhost:8081/auth/login`, this.user).subscribe((res:any)=>{
  //     console.log(res.token);
  //     if(res.token)
  //     {
  //       alert("login success")
  //       localStorage.setItem('loginToken',res.data.token)
        
  //       // this.router.navigateByUrl("/")
  //     }
  //     else{
  //       alert(res.message + "something went wrong")
  //     }
  //   })
  // }
  loginClick() {
    console.log("login button click", this.user.username, this.user.password );
  
    this.http.post(`http://localhost:8081/auth/login`, this.user).subscribe(
      (res: any) => {
        console.log(res.token);
        if (res.token) {
          alert("Login success");
          localStorage.setItem('loginToken', res.token);
          // Redirect or perform other actions on successful login
        } else {
          alert("Something went wrong");
        }
      },
      (error) => {
        // Handle errors here
        if (error.status === 401) {
          alert("Invalid username or password");
        } else {
          alert("Something went wrong");
        }
      }
    );
  }
  
}
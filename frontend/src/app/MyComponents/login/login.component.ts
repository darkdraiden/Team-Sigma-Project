import { Component, NgModule, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import baseurl from '../../services/helper';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

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
  toster = inject(ToastrService)
  constructor(private http :HttpClient, private router: Router)
  {
      
  }

   user:any = {
    username : '', 
    password : ''
  }
  
  loginClick() {
    console.log("login button click", this.user.username, this.user.password );
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(this.user.username)) {
      this.toster.error("Invalid email format","Error")

      // alert("Invalid email format");
      return;
    }

    this.http.post(`http://localhost:8081/auth/login`, this.user).subscribe(
      (res: any) => {
        console.log(res.token);
        if (res.token) {
          this.toster.success("Login success!", "Success")
          
          localStorage.setItem('loginToken', res.token);
          localStorage.setItem('email', res.username);
          this.router.navigate(['/']);
          // Redirect or perform other actions on successful login
        } else {
          this.toster.error("login failed","Error")
          
        }
      },
      (error) => {
        // Handle errors here
        if (error.status === 401) {
          this.toster.error("Login failed, Invalid username or password","Error")
          // alert("Invalid username or password"+ error);
        } else {
          this.toster.error("Something went wrong","Error")

        }
      }
    );
  }
  
}
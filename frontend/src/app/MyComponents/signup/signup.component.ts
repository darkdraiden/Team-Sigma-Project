import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private userService :UserService, private router: Router)
  {
      
  }

  user : any = {
    username : '', 
    password : '',
    name: ''
  }
  
  signupClick( )
  {
    
    console.log("signup button click", this.user.username, this.user.password, this.user.name )

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(this.user.username)) {
      alert("Invalid email format");
      
      return;
    }

    ///adduser user service
    this.userService.addUser(this.user).subscribe(
      (data) =>{
        console.log(data,"signup from backend")
        alert("success")
        this.router.navigate(['/']);
      }, 
      (error) =>
      {
        console.log("error form backend", error)
        alert("somethign went wrong"+ error)
      }
    )



  }
}

import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private userService :UserService)
  {
      
  }

  user : any = {
    username : '', 
    password : ''
  }
  
  signupClick( )
  {
    
    console.log("signup button click", this.user.username, this.user.password )

    ///adduser user service
    this.userService.addUser(this.user).subscribe(
      (data) =>{
        console.log(data,"signup from backend")
      }, 
      (error) =>
      {
        console.log("error form backend", error)
        alert("somethign went wrong")
      }
    )



  }
}

import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
  toster = inject(ToastrService)

  
  signupClick( )
  {
    
    console.log("signup button click", this.user.username, this.user.password, this.user.name )

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(this.user.username)) {
      this.toster.error("Invalid email format","Error")
      
      return;
    }

    ///adduser user service
    this.userService.addUser(this.user).subscribe(
      (data:any) =>{
        if (data.status === 'User created') {
          console.log(data, "signup from backend");
          this.toster.success("User created successfully!", "Success")

          // alert("User created successfully");
          this.router.navigate(['/']);
        }
        else if (this.user.name=="")
        this.toster.error("Data missing","Error")
        else {
          console.error("Error from backend:", data.message);
          this.toster.error("User already exists","Error")

          // alert("User already exists " + data.message);
        }
      },
      (error) =>
      {
        console.log("error form backend", error)
        this.toster.error("somethign went wrong","Error")

        // alert("somethign went wrong"+ error)
      }
    )



  }
}

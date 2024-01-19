import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string | undefined;
  pass: string | undefined;
  
  signupClick( )
  {
    email : this.email
    pass : this.pass
    console.log("signup button click", this.email, this.pass )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { 
    
  }
  /// add user
  public addUser(user:any)
  {
    console.log("xyzzzzz");
    return this.http.post(`${baseurl}/auth/create-user`, user)
  }
}

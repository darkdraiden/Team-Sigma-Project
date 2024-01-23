import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

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
  // public loginUser(user:any)
  // {
  //   console.log("login going to backend");
    
  // }
}

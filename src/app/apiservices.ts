import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {
  constructor(private http:HttpClient){}
  getproduct()
  {
    return this.http.get("https://dummyjson.com/products")
  }

  getUsers()
  {
     return this.http.get("https://dummyjson.com/Users")
  }
}
  


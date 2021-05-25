import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private username : string;
  private clientId ='3a89a5fbf7242a533ac4';
  private clientSecret ='ddee8cbd76aba1768e973bcab4e73be1c7e03fa8';
  constructor(private http:HttpClient) {
    this.username = "";
  }
  getServiceData(userName : string){
    return this.http.get("https://api.github.com/users/"+userName)
  }
}

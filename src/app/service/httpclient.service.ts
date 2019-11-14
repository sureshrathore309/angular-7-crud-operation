import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class user{
  constructor(
    public id:Number,
    public name:string,
    public country:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  baseUri:string ="http://localhost:8080"
  constructor(
    private httpClient:HttpClient
  ) {
     }

     getusers()
  {
    console.log("test call");
    return this.httpClient.get<user[]>(this.baseUri+'/user/get');
  }

  public deleteUser(user) {
    return this.httpClient.delete<user>(this.baseUri+"/user" + "/"+ user.id);
  }

  public createuser(user) {
    console.log(user)
    return this.httpClient.post<user>(this.baseUri+"/user/create", user);
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpClientService, user } from '../service/httpclient.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class userComponent implements OnInit {

  users:user[];
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getusers().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
    this.users=response;
}

deleteUser(user: user): void {
  this.httpClientService.deleteUser(user)
    .subscribe( data => {
      this.users = this.users.filter(u => u !== user);
      alert(user.name +" is Deleted Successfully")
    })
};

updateUser(user: user): void {
  this.httpClientService.updateUser(user)
    .subscribe( data => {
      this.users = this.users.filter(u => u !== user);
      alert(user.name +" is Deleted Successfully")
    })
};


}
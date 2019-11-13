import { Component, OnInit } from '@angular/core';
import { HttpClientService, user } from '../service/httpclient.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AdduserComponent implements OnInit {

  user: user = new user(0,"","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createUser(): void {
    this.httpClientService.createuser(this.user)
        .subscribe( data => {
          alert("user created successfully.");
        });
  };
}
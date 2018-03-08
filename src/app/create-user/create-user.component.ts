import { Component, OnInit } from '@angular/core';
import{User} from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  usersDB: User[] = [
    {
      "_id":"5aa0529e734d1d3717fbf810",
      "username": "kutaygunal",
      "password": "1234",
      "firstName": "Kutay",
      "lastName": "Gunal"
    },

    {
      "_id": "5aa16f96f2379029505049d6",
      "username": "burakhayfavi",
      "password": "1234",
      "firstName": "Sirri",
      "lastName": "Hayfavi",
    }
  ];

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}

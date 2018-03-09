import {Component} from '@angular/core';
import{User} from '../user';
import{HttpClient}from'@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs: ['user']
})
export class HomeComponent{
  query : string;
  users : object;
  currentUser : object;

  showUser(item){
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentUser= item;
  }

  constructor(private http : HttpClient){
    this.query = '';
    this.http.get<Object>('../assets/data.json').subscribe(
      data => {
        this.users = data;
      })
    this.currentUser = {
        "username": "kutaygunal",
        "password": "1234",
        "firstName": "Kutay",
        "lastName": "Gunal",
        "name": "Kutay Gunal",
        "shortname": "Kutay_Gunal",
        "reknown": "Software Engineer",
        "bio": "Responsible for designing, developing and testing software to create desktop application to the needs of the company and external customers.Responsible to run engineering software development projects with minimum supervision and/or customer interface.",
        "posts": [
          "Happy New Year.",
          "I really be hurting my own feelings by having high hopes lol.",
          "I need to go shopping i need more clothes and shoes 😩",
          "If u dedicate a song to me, I will 4ever think of u when I listen to it",
          "I HATE people who only hit u up when they need someone to rant to and don't bother talking to u otherwise like do I look like a therapist to u?? I'm abt to start charging ppl for doing that, I've gone through TOOO MUCH to give out my advice for free"
        ],
        "postsDates": [
          "31 December 2017",
          "07 September 2017",
          "1 August 2017",
          "2 June 2017",
          "14 May 2017"
        ]
      };
    }

  }

import { Component } from '@angular/core';
import {Input} from '@angular/core';
import{User} from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{

  @Input() currentUser : User;
  @Input() users : Array<User>;
  query : string;
  name : string;

  showUser(item){
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentUser= item;
  }
  
  constructor(){
    this.query = '';
  }

}

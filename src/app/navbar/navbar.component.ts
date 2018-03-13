import { Component } from '@angular/core';
import {Input,Output,EventEmitter} from '@angular/core';
import{User} from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{

  @Input() currentUser : User;
  @Input() users : Array<User>;
  @Output() viewingUser = new EventEmitter();
  query : string;

  showUser(item){
    this.query = '';
    item.highlight = !item.highlight;
    this.viewingUser.emit(item._id);
  }

  onClickedHome(event){
    this.viewingUser.emit('');
  }

  constructor(){
    this.query = '';
  }

}

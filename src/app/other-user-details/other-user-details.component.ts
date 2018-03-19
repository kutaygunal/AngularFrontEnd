import { Component, OnInit, Input,EventEmitter,Output} from '@angular/core';
import{User} from '../user';

@Component({
  selector: 'app-other-user-details',
  templateUrl: './other-user-details.component.html',
  styleUrls: ['./other-user-details.component.css']
})
export class OtherUserDetailsComponent implements OnInit {

  @Input() vUser : User;
  @Input() users : Array<User>;
  @Input() friendList : Array<User>;
  @Output() onAddingFriend = new EventEmitter();
  pt : Array<string>;
  ptD : Array<string>;
  isFriend : boolean;

  constructor() { }
  ngOnInit() {
    this.pt = this.vUser.posts;
    this.ptD = this.vUser.postsDates;
    this.isFriend = true;
  }
  addAsAFriend(e){
    this.isFriend = false;
    this.onAddingFriend.emit(this.vUser._id);

  }
}

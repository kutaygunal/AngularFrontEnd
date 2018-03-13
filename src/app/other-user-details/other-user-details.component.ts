import { Component, OnInit, Input} from '@angular/core';
import{User} from '../user';

@Component({
  selector: 'app-other-user-details',
  templateUrl: './other-user-details.component.html',
  styleUrls: ['./other-user-details.component.css']
})
export class OtherUserDetailsComponent implements OnInit {

  @Input() vUser : User;
  pt : Array<string>;
  ptD : Array<string>;

  constructor() { }

  ngOnInit() {
    this.pt = this.vUser.posts;
    this.ptD = this.vUser.postsDates;
  }
}

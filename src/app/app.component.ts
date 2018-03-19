import{Component,OnInit,Input}from'@angular/core';
import{UserService} from './user.service';
import{User} from './user';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService],
  styles: [
    `
    .list-group-item:first-child{
      border-top-left-radius : 0;
      border-top-right-radius : 0;
      border-top : 0;
    }

    #headerImage{
      float: right;
      width: 19%;
      margin-top: 10px;
      border-style: solid;
      border-width: medium;
      border-color: black;
      border-radius: 50%;
    }
    #accountName{
      float: right;
      color: black;
      margin-right: 20px;
      margin-top: 40px;
    }
    `
  ]
})
export class AppComponent implements OnInit{

  @Input() users : Array<User>;
  pt : Array<string>;
  postDate : Array<string>;
  currentUser : User;
  logined : boolean;
  notlogined : boolean;
  homePage : boolean;
  i : number;
  viewingUser : User;
  friend : User;
  friendList : Array<User>;
  viewingUserfriendList : Array<User>;
  dummyUser : User;

  constructor(private _userService:UserService,private _router: Router,){ }
  onLoginUser(currentUser){
    if(currentUser){
      this.logined = true;
      this.notlogined = false;
      this.homePage = true;
      this.currentUser = currentUser;
      this.pt = currentUser.posts;
      this.postDate = currentUser.postsDates;
      this.friendList = [];
      for(this.i = 0; this.i < currentUser.friends.length ; (this.i)++){
        this._userService.getUsersbyId(currentUser.friends[this.i])
        .subscribe(resUserData => this.friendList.push(resUserData))
      }
    }
  }

  onAddasFriend(_id){
    this._userService.getUsersbyId(_id)
    .subscribe(resUserData => this.friendList.push(resUserData))

    this._userService.updateUser(this.currentUser)
    //.subscribe(resUpdatedUser =>
    //  console.log(resUpdatedUser)
    //);
  }

  getViewingUserFriendList(resUserData){
    console.log(resUserData);
    this.viewingUser = resUserData;
    this.viewingUserfriendList = [];
    if(resUserData.friends){
      for(this.i = 0; this.i < resUserData.friends.length ; (this.i)++){
        this._userService.getUsersbyId(resUserData.friends[this.i])
        .subscribe(resUserData => this.viewingUserfriendList.push(resUserData))
      }
    }
  }

  onViewUser(_id){
    if(_id){
      this.homePage = false;
      console.log(_id);
      this._userService.getUsersbyId(_id)
      .subscribe(resUserData => this.getViewingUserFriendList(resUserData))
    }
    else{
      this.homePage = true;
      this.viewingUser = null;
    }
  }

  onLogout(logout){
    this.logined = false;
    this.notlogined = true;
    this.currentUser = null;
  }

  ngOnInit(){
    this.logined = false;
    this.notlogined = true;
    this._userService.getUsers()
    .subscribe(resUserData => this.users = resUserData)
  }
}

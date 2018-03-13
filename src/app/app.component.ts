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
  registration : boolean;
  homePage : boolean;
  i : number;
  viewingUser : User;

  constructor(private _userService:UserService,private _router: Router,){ }
  onLoginUser(currentUser){
    if(currentUser){
      this.logined = true;
      this.notlogined = false;
      this.homePage = true;
      this.currentUser = currentUser;
      this.pt = currentUser.posts;
      this.postDate = currentUser.postsDates;
    }
  }
  
  onViewUser(_id){
    if(_id){
      this.homePage = false;
      this._userService.getUsersbyId(_id)
      .subscribe(resUserData => this.viewingUser = resUserData)
    }
    else{
      this.homePage = true;
      this.viewingUser = null;
    }
  }

  ngOnInit(){
    this.logined = false;
    this.notlogined = true;
    this._userService.getUsers()
    .subscribe(resUserData => this.users = resUserData )
  }
}

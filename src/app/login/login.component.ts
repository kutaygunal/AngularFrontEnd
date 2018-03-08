import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../user';
import{UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit{

  currentUser : object;
  failure : string;
  users:Array<User>;

  constructor(private router:Router, private _userService:UserService){ }

  loginUser(e){
      var userName = e.target.elements[0].value;
      var password = e.target.elements[1].value;
      for(var i = 0; i < this.users.length; i++)
      {
        if(this.users[i].username == userName && this.users[i].password == password){
          this.router.navigate(['gallery']);
        }
      }
      this.failure = "The password that you've entered is incorrect.";
  }

  ngOnInit(){
      this.failure = '';
      this._userService.getUsers()
        .subscribe(resUserData => this.users = resUserData )
  }
}

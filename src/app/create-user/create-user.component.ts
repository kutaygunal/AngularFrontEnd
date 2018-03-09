import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import{UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService]
})
export class CreateUserComponent implements OnInit {

  users:Array<User>;
  passwordMatchingFailure : string;
  firstPost = ["This is my first post. Hello Social Owl."];
  firstPostDate = ["Today"];

  constructor(private _userService:UserService, private router:Router) { }
  onSubmitRegister(user:User){
     if(user.password == user.confirm){
       user.name = user.firstName + " " + user.lastName;
       user.name = user.firstName + "_" + user.lastName;
       user.reknown = "New Comer";
       user.bio = "Please enter your bio, here";
       user.posts = this.firstPost;
       user.postsDates = this.firstPostDate;
       this._userService.addUser(user)
        .subscribe(resNewUser => {
            this.users.push(resNewUser);
        });
        this.passwordMatchingFailure = 'Your account has been created.';
        this.router.navigate(['']);
     }
     else{
       this.passwordMatchingFailure = 'Password does not match the confirm password.';
     }
  }
  ngOnInit() {
    this.passwordMatchingFailure = '';
  }

}

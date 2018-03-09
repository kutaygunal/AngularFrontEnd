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

  constructor(private _userService:UserService, private router:Router) { }
  onSubmitRegister(user:User){
     if(user.password == user.confirm){
       user.name = user.firstName + " " + user.lastName;
       user.name = user.firstName + "_" + user.lastName;
       user.reknown = "New Comer";
       user.bio = "Please enter your bio, here";
       user.posts[0] =  "This is my first post. Hello Social Owl";
       user.postsDates[0] = "Today";
       this._userService.addUser(user)
        .subscribe(resNewUser => {
            this.users.push(resNewUser);
        })
        this.passwordMatchingFailure = 'Your account has been created.';
        this.router.navigate(['login']);
     }
     else{
       this.passwordMatchingFailure = 'Password does not match the confirm password.';
     }
  }

  ngOnInit() {
    this.passwordMatchingFailure = '';
  }

}

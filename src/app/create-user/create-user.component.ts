import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import{User} from '../user';
import{UserService} from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService]
})
export class CreateUserComponent implements OnInit {

  users: User[] = [];
  usersDb: User[] = [];
  @Output() userCreated = new EventEmitter();
  passwordMatchingFailure : string;
  defaultBio : string;
  defaultReknown : string;
  firstPost = ["This is my first post. Hello Social Owl."];
  firstPostDate = ["Today"];

  constructor(private _userService:UserService){ }

  onSubmitRegister(user:User){
     if(user.password == user.confirm){
       user.name = user.firstName + " " + user.lastName;
       user.reknown = this.defaultReknown;
       user.bio = this.defaultBio;
       user.posts = this.firstPost;
       user.postsDates = this.firstPostDate;
       this._userService.addUser(user).subscribe(resNewUser => {
            this.users.push(resNewUser);
        });
        this.passwordMatchingFailure = 'Your account has been created.';
        this.userCreated.emit(true);
     }
     else{
       this.passwordMatchingFailure = 'Password does not match the confirm password.';
     }
  }
  ngOnInit() {
    this.passwordMatchingFailure = '';
    this.defaultBio = "Please enter your bio, here";
    this.defaultReknown = "New Comer";;
  }

}

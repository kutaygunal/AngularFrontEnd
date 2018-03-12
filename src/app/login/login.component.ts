import { Component,OnInit,Output,Input,EventEmitter} from '@angular/core';
import{User} from '../user';
import{UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @Input() users : Array<User>;
  @Output() loginUser = new EventEmitter();
  currentUser : User;
  failure : string;
  goToRegister :  boolean;
  goToLogin : boolean;

  constructor(private _userService:UserService){ }

  onLoginUser(e){                            // when user enter his username and password
      var userName = e.target.elements[0].value;
      var password = e.target.elements[1].value;
      for(var i = 0; i < this.users.length; i++)
      {
        if(this.users[i].username == userName && this.users[i].password == password){     // confirm username and password in dabatabe
          this.currentUser = this.users[i];
          this.loginUser.emit(this.currentUser);             // set user information as currentUser & send them to relevant component
        }
      }
      this.failure = "The password that you've entered is incorrect.";    // Give error if it is not matched.
  }

  onCreateUser(e){                            // when user click create account link
      this.goToRegister = !this.goToRegister;
      this.goToLogin = !this.goToLogin;
  }

  onUserCreated(registered){                         // when user create an account
      this.goToRegister = !registered;
      this.goToLogin = registered;
  }

  ngOnInit(){                                // angular initializer
      this.failure = '';
      this.goToRegister = false;
      this.goToLogin = true;
  }

}

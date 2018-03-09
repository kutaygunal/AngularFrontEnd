import {Component} from '@angular/core';
import{User} from '../user';
import{HttpClient}from'@angular/common/http';
import{UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
  query : string;
  users : object;
  currentUser : object;
  usersDb:Array<User>;
  name : string;

  showUser(item){
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentUser= item;
  }

  constructor(private http : HttpClient,private _userService:UserService){
    this.query = '';
    this.http.get<Object>('../assets/data.json').subscribe(
      data => {
        this.users = data;
      })
      this._userService.getUsers()
        .subscribe(resUserData => this.usersDb = resUserData )
      this.currentUser = this.usersDb[(this.usersDb.length)-1];
      this.name = this.usersDb[(this.usersDb.length)-1].name;
      let userArray = this.usersDb;
      this._userService.deleteCurrentUser(this.usersDb[(this.usersDb.length)-1])
      .subscribe(resDeletedUser => {
        for(let i=0; i < userArray.length; i++)
        {
          if(userArray[i]._id === this.usersDb[(this.usersDb.length)-1]._id)
          {
            userArray.splice(i,1);
          }
        }
    });
  }
}

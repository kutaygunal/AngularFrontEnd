import { Component,Input} from '@angular/core';
import{UserService} from '../user.service';
import{User} from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent{

  @Input() pt : Array<string>;
  @Input() postDate : Array<string>;
  @Input() user : User;
  publish :string;
  today : Date;
  todayStr : string;

  constructor(private _userService:UserService){
  }

  onPublish(e){
    if(this.publish){
      // Get today date
      this.today = new Date();
      var dd = this.today.getDate();
      var mm = this.today.getMonth()+1; //January is 0!
      var yyyy = this.today.getFullYear();
      this.todayStr = mm + '/' + dd + '/' + yyyy;

      // Update post and post dates in GUI
      this.pt.pop();
      this.pt.splice(0, 0,this.publish);
      this.postDate.pop();
      this.postDate.splice(0, 0,this.todayStr);

      // Clear text box
      this.publish = "";

      // Set currentUser's post and postdates and send to MongoDB
      this.user.posts = this.pt;
      this.user.postsDates = this.postDate ;
      this._userService.updateUser(this.user)
      .subscribe(resUpdatedUser => this.user = resUpdatedUser);
    }
  }
}

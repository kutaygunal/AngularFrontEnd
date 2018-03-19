import { Component,OnInit,Input} from '@angular/core';
import{UserService} from '../user.service';
import{User} from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{

  @Input() users : Array<User>;
  @Input() user : User;
  @Input() friendList : Array<User>;
  publish :string;
  today : Date;
  todayStr : string;
  showingImages : boolean;
  i : number;

  constructor(private _userService:UserService){
    this.showingImages = true;
  }

  ngOnInit(){
  }

  onPublish(e){
    if(this.publish){
      // Replace newlines with spaces
      this.publish = this.publish.replace(/\n/g, " ");

      // Get today date
      this.today = new Date();
      var dd = this.today.getDate();
      var mm = this.today.getMonth()+1; //January is 0!
      var yyyy = this.today.getFullYear();
      this.todayStr = mm + '/' + dd + '/' + yyyy;

      // Update post and post dates in GUI
      if(this.user.posts.length >= 5){
      this.user.posts.pop();
      this.user.postsDates.pop();}
      this.user.posts.splice(0, 0,this.publish);
      this.user.postsDates.splice(0, 0,this.todayStr);

      // Clear text box
      this.publish = "";

      // Set currentUser's post and postdates and send to MongoDB
      this._userService.updateUser(this.user)
      .subscribe(resUpdatedUser => this.user = resUpdatedUser);
    }
  }
}

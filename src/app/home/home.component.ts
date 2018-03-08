import { Component } from '@angular/core';
import{User} from '../user';
import{HttpClient}from'@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  query : string;
  users : object;
  currentUser : object;

  showUser(item){
      this.query = item.name;
      item.highlight = !item.highlight;
      this.currentUser= item;
  }

  constructor(private http : HttpClient){
        this.query = '';
        this.http.get<Object>('../assets/data.json').subscribe(
          data => {
             this.users = data;
          })
  }

}

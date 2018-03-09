import { Injectable,Output} from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import{User} from './user';
import { EventEmitter } from '@angular/core';

@Injectable()
export class UserService {

  private _getUrl = "/api/userAccounts";
  private _postUrl = "/api/userAccounts";

  @Output() change: EventEmitter<User> = new EventEmitter();

  constructor(private _http: Http){
  }

  getUsers(){
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addUser(user : User){
    let headers = new Headers({ 'Content-Type' : ' application/json'});
    let options = new RequestOptions({ headers:headers});
    return this._http.post(this._postUrl, JSON.stringify(user),options)
      .map((response:Response) => response.json());
  }

  sendUser(user: User){
    this.change.emit(user);
  }
}

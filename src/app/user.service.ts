import { Injectable,Output} from '@angular/core';
import { Http,Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import{User} from './user';

@Injectable()
export class UserService {

  private _getUrl = "/api/userAccounts";
  private _postUrl = "/api/userAccounts";
  private _deleteUrl = "/api/userAccounts/";
  private _putUrl = "/api/userAccounts/";

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


  updateUser(user : User){
      let headers = new Headers({ 'Content-Type' : ' application/json'});
      let options = new RequestOptions({ headers:headers});
      return this._http.put(this._putUrl + user._id, JSON.stringify(user),options)
        .map((response:Response) => response.json());
    }

  deleteCurrentUser(user : User){
    return this._http.delete(this._deleteUrl + user._id)
      .map((response: Response) => response.json());
  }

  getUsersbyId(id : string){
    return this._http.get(this._putUrl + id)
      .map((response: Response) => response.json());
  }

}

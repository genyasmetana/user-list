import { Injectable }        from '@angular/core';
import { Http, Response }              from "@angular/http";
import { Observable }        from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map'
import { IUsers }            from "./user";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class UserService {

  private _usersUrl = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<IUsers>(this._usersUrl);
  }
}

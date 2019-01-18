import { Injectable } from '@angular/core';
//first import HttpClient.then inject it
import { HttpClient } from '@angular/common/http';
import { User } from './user'


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
//add an url to which data will be posted
  _url=''
  constructor(private _http: HttpClient) { }

  //create a method with an argument user of type User to make the post request
  enroll(user : User){
   return this._http.post<any>(this._url, user)//the post request  will return the response as an observable so we need to subscribe to the observable in app component
    

  }
}

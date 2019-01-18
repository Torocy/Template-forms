import { Injectable } from '@angular/core';
//first import HttpClient.then inject it
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http: HttpClient) { }
}

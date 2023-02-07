import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Colleague[]>('https://dev.cleverapps.io/api/v2/colleagues')
  }

}

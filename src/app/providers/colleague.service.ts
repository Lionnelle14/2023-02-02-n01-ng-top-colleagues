import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {HttpClient} from "@angular/common/http";
import {ColleagueForm} from "../models/colleague-form";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private url = 'https://dev.cleverapps.io/api/v2/colleagues';
  constructor(private http: HttpClient) {
  }
  list() {
    return this.http.get<Colleague[]>(this.url)
  }

  // formData:

  submitForm(formData: Partial<ColleagueForm>) {
    this.http.post(this.url, formData).subscribe()
  }

}

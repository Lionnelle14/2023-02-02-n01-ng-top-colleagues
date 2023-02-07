import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleagues: Colleague[] = [];

  constructor(private colleagueService: ColleagueService) {
    this.init();
  }

  init(){
    this.colleagueService.list()
      .subscribe(tabColleagues => this.colleagues = tabColleagues);
  }

}

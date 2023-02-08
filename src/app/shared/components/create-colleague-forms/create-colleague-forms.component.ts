import { Component } from '@angular/core';
import {ColleagueForm} from "../../../models/colleague-form";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  colleagueToCreate: Partial<ColleagueForm> = {};

  constructor(private service:ColleagueService) {
  }
  valid() {
    console.log(this.colleagueToCreate);
    this.service.submitForm(this.colleagueToCreate)
  }
}

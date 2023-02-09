import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
})
export class ColleagueComponent {
  @Input() colleague: Colleague = {
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    pseudo: 'Milou',
    score: 10
  };
}

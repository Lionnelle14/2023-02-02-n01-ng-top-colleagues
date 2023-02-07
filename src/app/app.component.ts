import { Component } from '@angular/core';
import {LikeHate} from "./models/like-hate";
import {ColleagueService} from "./providers/colleague.service";

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'top-colleagues';

}

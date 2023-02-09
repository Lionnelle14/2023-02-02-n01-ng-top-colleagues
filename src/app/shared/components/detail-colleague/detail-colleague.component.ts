import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailColleague} from "../../../models/detail-colleague";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-detail-colleague',
  templateUrl: './detail-colleague.component.html',
  styleUrls: ['./detail-colleague.component.scss']
})
export class DetailColleagueComponent {


  detailColleague: DetailColleague = {
    photo: "",
    pseudo: "",
    score: 0,
    last: "",
    first: ""
  }


  constructor(private activedRoute: ActivatedRoute,
              private service: ColleagueService) {
    this.activedRoute.paramMap
      .subscribe(paramMap => {
        const pseudo = paramMap.get("pseudo")
        if (pseudo) {
          this.service.getColleague(pseudo)
            .subscribe(colleagueDetail => {
              this.detailColleague = colleagueDetail;
            })
        }

      })
  }

}

import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleagues: Colleague[] = [
    {
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
      pseudo: 'Pam',
      score: 10
    },

    {
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      pseudo: 'Ros',
      score: 10
    },

    {
      photo: 'https://randomuser.me/api/portraits/men/4.jpg',
      pseudo: 'Lio',
      score: 10
    },

    {
      photo: 'https://randomuser.me/api/portraits/men/5.jpg',
      pseudo: 'Jsc',
      score: 10
    },

    {
      photo: 'https://randomuser.me/api/portraits/men/6.jpg',
      pseudo: 'Bert',
      score: 10
    },

    {
      photo: 'https://randomuser.me/api/portraits/men/7.jpg',
      pseudo: 'Vert',
      score: 10
    },

    {
      photo: 'https://randomuser.me/api/portraits/men/8.jpg',
      pseudo: 'Jean',
      score: 10
    },

    {
      photo: 'https://randomuser.me/api/portraits/men/9.jpg',
      pseudo: 'Lab',
      score: 10
    },


  ]
}

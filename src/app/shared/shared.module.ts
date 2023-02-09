import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LikeHateComponent} from './components/like-hate/like-hate.component';
import {ColleagueComponent} from '../shared/components/colleague/colleague.component';
import {ColleagueListComponent} from '../shared/components/colleague-list/colleague-list.component';
import {CounterComponent} from '../shared/components/counter/counter.component';

import {CreateColleagueFormsComponent} from './components/create-colleague-forms/create-colleague-forms.component';
import {FormsModule} from "@angular/forms";
import {MenuComponentComponent} from './components/menu-component/menu-component.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { DetailColleagueComponent } from './components/detail-colleague/detail-colleague.component';

@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    MenuComponentComponent,
    DetailColleagueComponent,
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    MenuComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ]
})
export class SharedModule {
}

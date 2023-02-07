import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { CounterComponent } from '../shared/components/counter/counter.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    CounterComponent
  ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        CounterComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class SharedModule { }

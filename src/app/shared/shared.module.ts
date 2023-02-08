import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { CounterComponent } from '../shared/components/counter/counter.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import {FormsModule} from "@angular/forms";
import { FirstLastValidatorDirective } from './validators/first-last-validator.directive';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    FirstLastValidatorDirective
  ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        CounterComponent,
        CreateColleagueFormsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})
export class SharedModule { }

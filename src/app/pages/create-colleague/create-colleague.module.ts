import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePageComponent } from './create-colleague-page/create-colleague-page.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [

      CreateColleaguePageComponent
  ],
  exports: [
    CreateColleaguePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateColleagueModule { }

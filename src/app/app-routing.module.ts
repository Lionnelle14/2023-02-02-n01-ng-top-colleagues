import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ColleagueListComponent} from './shared/components/colleague-list/colleague-list.component';
import {
  CreateColleagueFormsComponent
} from "./shared/components/create-colleague-forms/create-colleague-forms.component";


export const routes: Routes = [
  {path: 'colleagues', component: ColleagueListComponent},
  {path: 'form-template', component: CreateColleagueFormsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/colleagues'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

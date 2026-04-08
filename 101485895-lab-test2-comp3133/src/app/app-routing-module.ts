import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Missionlist } from './missionlist/missionlist';
import { Missiondetails } from './missiondetails/missiondetails';

const routes: Routes = [
  { path: '', component: Missionlist },
  { path: 'mission/:flight_number', component: Missiondetails }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
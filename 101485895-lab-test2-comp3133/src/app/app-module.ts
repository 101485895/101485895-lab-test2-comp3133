import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Missionlist } from './missionlist/missionlist';
import { Missiondetails } from './missiondetails/missiondetails';
import { Missionfilter } from './missionfilter/missionfilter';

@NgModule({
  declarations: [App, Missionlist, Missiondetails, Missionfilter],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

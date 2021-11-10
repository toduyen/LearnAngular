import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabconComponent } from './tabcon/tabcon.component';
import { TabsChaComponent } from './tabs-cha/tabs-cha.component';
import { TabsbootstrapComponent } from './tabsbootstrap/tabsbootstrap.component';

@NgModule({
  declarations: [AppComponent, TabsChaComponent, TabconComponent, TabsbootstrapComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsChaComponent } from './tabs-cha/tabs-cha.component';
import { TabsConComponent } from './tabs-con/tabs-con.component';

@NgModule({
  declarations: [AppComponent, TabsChaComponent, TabsConComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

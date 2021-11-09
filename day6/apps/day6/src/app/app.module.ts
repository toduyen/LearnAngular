import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabchaComponent } from './tabcha/tabcha.component';
import { TabconComponent } from './tabcon/tabcon.component';

@NgModule({
  declarations: [AppComponent, TabchaComponent, TabconComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

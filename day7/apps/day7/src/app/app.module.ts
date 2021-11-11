import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormatAddressPipe } from './format-address.pipe';

@NgModule({
  declarations: [AppComponent , FormatAddressPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

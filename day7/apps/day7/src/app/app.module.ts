import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormatAddressPipe } from './format-address.pipe';
import { UongRuouPipe } from './uongruou.pipe';

@NgModule({
  declarations: [AppComponent , FormatAddressPipe , UongRuouPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

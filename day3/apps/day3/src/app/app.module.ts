import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleDemoComponent } from './toggle-demo/toggle-demo.component';

@NgModule({
  declarations: [AppComponent, ToggleDemoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

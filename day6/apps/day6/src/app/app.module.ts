import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabconComponent } from './tabcon/tabcon.component';
import { TabsChaComponent } from './tabs-cha/tabs-cha.component';
import { TabsbootstrapComponent } from './tabsbootstrap/tabsbootstrap.component';
import { CouterComponent } from './couter/couter.component';
import { TabPanelDirective } from './tab-panel.directive';

@NgModule({
  declarations: [AppComponent, TabsChaComponent, TabconComponent, TabsbootstrapComponent, CouterComponent, TabPanelDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

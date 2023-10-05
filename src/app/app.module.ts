import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorfulDirective } from './colorful.directive';
import { AppHigh1lightDirective } from './app-high1light.directive';
import { CarouseDirective } from './carouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    AppHigh1lightDirective,
    CarouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

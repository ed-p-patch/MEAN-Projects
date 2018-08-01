import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { AddQouteComponent } from './main-app/add-qoute/add-qoute.component';
import { ShowQouteComponent } from './main-app/show-qoute/show-qoute.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent, MainAppComponent, AddQouteComponent, ShowQouteComponent ],
  imports: [ BrowserModule, FormsModule ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

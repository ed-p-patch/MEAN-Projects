import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HumanComponentComponent } from './human-component/human-component.component';
import { SaiyanComponentComponent } from './saiyan-component/saiyan-component.component';
import { SuperSaiyanComponentComponent } from './super-saiyan-component/super-saiyan-component.component';
import { SuperSaiyanTwoComponentComponent } from './super-saiyan-two-component/super-saiyan-two-component.component';
import { SuperSaiyanTwoThreeComponentComponent } from './super-saiyan-two-three-component/super-saiyan-two-three-component.component';
import { SuperSaiyanTwoFourComponentComponent } from './super-saiyan-two-four-component/super-saiyan-two-four-component.component';

@NgModule({
  declarations: [ AppComponent,
    HumanComponentComponent, SaiyanComponentComponent,
    SuperSaiyanComponentComponent, SuperSaiyanTwoComponentComponent,
    SuperSaiyanTwoThreeComponentComponent, SuperSaiyanTwoFourComponentComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpModule ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
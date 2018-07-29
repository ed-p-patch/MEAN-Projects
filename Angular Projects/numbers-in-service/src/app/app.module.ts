import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SequenceAlphaComponent } from './sequence-alpha/sequence-alpha.component';
import { SequenceBetaComponent } from './sequence-beta/sequence-beta.component';
import { SequenceGammaComponent } from './sequence-gamma/sequence-gamma.component';
import { SharedDataService } from './shared-data.service';

@NgModule({
  declarations: [ AppComponent, SequenceAlphaComponent, SequenceBetaComponent, SequenceGammaComponent ],
  imports: [ BrowserModule ],
  providers: [ SharedDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

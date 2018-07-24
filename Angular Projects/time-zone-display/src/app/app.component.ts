import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  now = new Date();
  last_click = null;
  
  onClick(btevent){
    this.now = new Date();
    if(btevent === 0){ this.last_click = 0; } //pst
    if(btevent === 1){ this.now.setHours(this.now.getHours() + 1); this.last_click = 1; } //mst
    if(btevent === 2){ this.now.setHours(this.now.getHours() + 2); this.last_click = 2; } //cst
    if(btevent === 3){ this.now.setHours(this.now.getHours() + 3); this.last_click = 3; } //est
    if(btevent === 4){ this.last_click = 4; this.now = null; } //clear
  }
}

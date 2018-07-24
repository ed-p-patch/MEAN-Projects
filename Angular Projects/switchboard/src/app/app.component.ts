import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttons = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  buttons_class = ['on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on', 'on'];
  // There is definitely a simpler way to maintain this using only one array
  onClick(button_num){
    if(this.buttons[button_num] === 1){ this.buttons[button_num] = 0; this.buttons_class[button_num] = 'off'; }
    else{ this.buttons[button_num] = 1; this.buttons_class[button_num] = 'on'; }
  }
}

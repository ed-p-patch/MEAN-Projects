import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Barcode App!';
  rand_color(): string{
    let myArray = ['red', 'yellow', 'blue', 'green', 'orange', 'fuschia', 'cyan', 'purple', 
                   'salmon', 'pink', 'black', 'gray', 'white', 'brown', 'seagreen', 'yellowgreen', 
                   'azure', 'peru', 'sandybrown', 'midnightblue', 'teal', 'coral', 'maroon', 'royalblue', 'olive' ];
    let num = Math.floor(Math.random() * 24);
    let result: string;
    result = myArray[num];
    return result;
  }
}

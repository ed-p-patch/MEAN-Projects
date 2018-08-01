import { Component, Output, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  pow: number;
  ngOnInit(){ this.pow = 1; }
  
  //@Output() calculate = new EventEmitter();
}

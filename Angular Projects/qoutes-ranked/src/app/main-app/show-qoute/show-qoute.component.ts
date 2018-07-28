import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-qoute',
  templateUrl: './show-qoute.component.html',
  styleUrls: ['./show-qoute.component.css']
})
export class ShowQouteComponent implements OnInit {
  @Input() qoutes;
  @Output() deleted_event = new EventEmitter();
  @Output() up_event = new EventEmitter();
  @Output() down_event = new EventEmitter();
  
  constructor(){ }
  ngOnInit(){ }

  delete(qoute){ this.deleted_event.emit(qoute); } 
  up(qoute){ this.up_event.emit(qoute); }
  down(qoute){ this.down_event.emit(qoute); }
}

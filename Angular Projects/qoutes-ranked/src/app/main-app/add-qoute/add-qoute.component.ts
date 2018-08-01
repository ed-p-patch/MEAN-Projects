import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-qoute',
  templateUrl: './add-qoute.component.html',
  styleUrls: ['./add-qoute.component.css']
})
export class AddQouteComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  @Input() qoutes;
  @Output() created_event = new EventEmitter();

  n_qoute = {
    qoute: "",
    author: "",
    score: 0
  };

  create(data){
    console.log(data);
    this.created_event.emit(this.n_qoute);

    this.n_qoute = { 
      qoute: "", 
      author: "", 
      score: 0 
    };
  }
}
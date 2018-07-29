import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-sequence-beta',
  templateUrl: './sequence-beta.component.html',
  styleUrls: ['./sequence-beta.component.css']
})
export class SequenceBetaComponent implements OnInit {
  constructor(private _sharedDataService: SharedDataService) { }
  ngOnInit() { }
  numbers = [];

  generate_numbers(){
    this.numbers = [];
    this.numbers.push(Math.floor(Math.random() * 15));
    this.numbers.push(Math.floor(Math.random() * 15));
    return this.numbers;
  }

}

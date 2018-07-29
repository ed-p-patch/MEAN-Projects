import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-sequence-alpha',
  templateUrl: './sequence-alpha.component.html',
  styleUrls: ['./sequence-alpha.component.css']
})
export class SequenceAlphaComponent implements OnInit {
  constructor(private _sharedDataService: SharedDataService) { }
  ngOnInit() { }
  numbers = [];

  generate_numbers(){
    this.numbers = [];
    this.numbers.push(Math.floor(Math.random() * 15));
    this.numbers.push(Math.floor(Math.random() * 15));
    //_sharedDataService.get_a();
    return this.numbers;
  }
}

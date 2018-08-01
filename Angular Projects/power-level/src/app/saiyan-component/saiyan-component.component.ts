import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan-component',
  templateUrl: './saiyan-component.component.html',
  styleUrls: ['./saiyan-component.component.css']
})
export class SaiyanComponentComponent implements OnInit, OnChanges {
  @Input() pow;
  constructor() { }
  ngOnInit() {  }
  ngOnChanges() { this.pow = this.pow * 10; }
}
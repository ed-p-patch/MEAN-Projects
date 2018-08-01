import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two-three-component',
  templateUrl: './super-saiyan-two-three-component.component.html',
  styleUrls: ['./super-saiyan-two-three-component.component.css']
})
export class SuperSaiyanTwoThreeComponentComponent implements OnInit, OnChanges {
  @Input() pow;
  constructor() { }
  ngOnInit() { }
  ngOnChanges(){ this.pow = this.pow * 500; }
}
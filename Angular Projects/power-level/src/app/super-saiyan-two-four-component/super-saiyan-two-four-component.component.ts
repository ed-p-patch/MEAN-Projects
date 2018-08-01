import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two-four-component',
  templateUrl: './super-saiyan-two-four-component.component.html',
  styleUrls: ['./super-saiyan-two-four-component.component.css']
})
export class SuperSaiyanTwoFourComponentComponent implements OnInit, OnChanges {
  @Input() pow;
  constructor() { }
  ngOnInit() { }
  ngOnChanges(){ this.pow = this.pow * 250; }
}

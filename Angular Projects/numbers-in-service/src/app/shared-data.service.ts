import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedDataService {
  constructor() { }
  anumbers= [];
  bnumbers= [];

  get_a(nums){ this.anumbers = nums; }
  get_b(nums){ this.bnumbers = nums; }
  calculate_g(anumbers, bnumbers){ return (anumbers[0]+anumbers[1]) - (bnumbers[0]-bnumbers[1]); }
}

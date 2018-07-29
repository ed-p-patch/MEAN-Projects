import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceGammaComponent } from './sequence-gamma.component';

describe('SequenceGammaComponent', () => {
  let component: SequenceGammaComponent;
  let fixture: ComponentFixture<SequenceGammaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceGammaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceGammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

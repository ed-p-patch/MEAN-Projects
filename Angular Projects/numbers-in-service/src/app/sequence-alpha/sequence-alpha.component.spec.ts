import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceAlphaComponent } from './sequence-alpha.component';

describe('SequenceAlphaComponent', () => {
  let component: SequenceAlphaComponent;
  let fixture: ComponentFixture<SequenceAlphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceAlphaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

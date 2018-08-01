import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceBetaComponent } from './sequence-beta.component';

describe('SequenceBetaComponent', () => {
  let component: SequenceBetaComponent;
  let fixture: ComponentFixture<SequenceBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

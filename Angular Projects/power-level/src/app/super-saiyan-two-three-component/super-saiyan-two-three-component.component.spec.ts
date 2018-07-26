import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanTwoThreeComponentComponent } from './super-saiyan-two-three-component.component';

describe('SuperSaiyanTwoThreeComponentComponent', () => {
  let component: SuperSaiyanTwoThreeComponentComponent;
  let fixture: ComponentFixture<SuperSaiyanTwoThreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanTwoThreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanTwoThreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

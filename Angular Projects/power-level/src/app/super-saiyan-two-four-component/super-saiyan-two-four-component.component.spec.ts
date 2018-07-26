import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanTwoFourComponentComponent } from './super-saiyan-two-four-component.component';

describe('SuperSaiyanTwoFourComponentComponent', () => {
  let component: SuperSaiyanTwoFourComponentComponent;
  let fixture: ComponentFixture<SuperSaiyanTwoFourComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanTwoFourComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanTwoFourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

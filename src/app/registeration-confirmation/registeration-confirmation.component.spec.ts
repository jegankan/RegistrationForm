import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationConfirmationComponent } from './registeration-confirmation.component';

describe('RegisterationConfirmationComponent', () => {
  let component: RegisterationConfirmationComponent;
  let fixture: ComponentFixture<RegisterationConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterationConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

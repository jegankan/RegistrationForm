import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofUsersComponent } from './listofusers.component';

describe('ListofusersComponent', () => {
  let component: ListofUsersComponent;
  let fixture: ComponentFixture<ListofUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

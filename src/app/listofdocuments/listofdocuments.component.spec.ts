import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofdocumentsComponent } from './listofdocuments.component';

describe('ListofdocumentsComponent', () => {
  let component: ListofdocumentsComponent;
  let fixture: ComponentFixture<ListofdocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofdocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

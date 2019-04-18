import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnCompleteComponent } from './return-on-complete.component';

describe('ReturnOnCompleteComponent', () => {
  let component: ReturnOnCompleteComponent;
  let fixture: ComponentFixture<ReturnOnCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOnCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOnCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

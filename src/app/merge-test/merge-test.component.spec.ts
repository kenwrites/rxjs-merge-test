import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeTestComponent } from './merge-test.component';

describe('MergeTestComponent', () => {
  let component: MergeTestComponent;
  let fixture: ComponentFixture<MergeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

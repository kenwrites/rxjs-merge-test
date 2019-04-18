import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatcherrorTestComponent } from './catcherror-test.component';

describe('CatcherrorTestComponent', () => {
  let component: CatcherrorTestComponent;
  let fixture: ComponentFixture<CatcherrorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatcherrorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatcherrorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

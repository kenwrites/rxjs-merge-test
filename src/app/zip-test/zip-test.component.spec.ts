import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipTestComponent } from './zip-test.component';

describe('ZipTestComponent', () => {
  let component: ZipTestComponent;
  let fixture: ComponentFixture<ZipTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

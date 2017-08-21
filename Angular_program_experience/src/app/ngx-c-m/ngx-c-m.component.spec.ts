import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCMComponent } from './ngx-c-m.component';

describe('NgxCMComponent', () => {
  let component: NgxCMComponent;
  let fixture: ComponentFixture<NgxCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

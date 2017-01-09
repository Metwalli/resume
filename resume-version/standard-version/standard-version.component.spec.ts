/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StandardVersionComponent } from './standard-version.component';

describe('StandardVersionComponent', () => {
  let component: StandardVersionComponent;
  let fixture: ComponentFixture<StandardVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

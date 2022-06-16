import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receipient1Component } from './receipient1.component';

describe('Receipient1Component', () => {
  let component: Receipient1Component;
  let fixture: ComponentFixture<Receipient1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Receipient1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Receipient1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

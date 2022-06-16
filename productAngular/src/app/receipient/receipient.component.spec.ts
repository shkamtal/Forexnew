import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipientComponent } from './receipient.component';

describe('ReceipientComponent', () => {
  let component: ReceipientComponent;
  let fixture: ComponentFixture<ReceipientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

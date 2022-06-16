import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCurrancyComponent } from './exchange-currancy.component';

describe('ExchangeCurrancyComponent', () => {
  let component: ExchangeCurrancyComponent;
  let fixture: ComponentFixture<ExchangeCurrancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeCurrancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

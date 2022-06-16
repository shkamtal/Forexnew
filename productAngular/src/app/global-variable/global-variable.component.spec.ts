import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalVariableComponent } from './global-variable.component';

describe('GlobalVariableComponent', () => {
  let component: GlobalVariableComponent;
  let fixture: ComponentFixture<GlobalVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulegenComponent } from './rulegen.component';

describe('RulegenComponent', () => {
  let component: RulegenComponent;
  let fixture: ComponentFixture<RulegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulegenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

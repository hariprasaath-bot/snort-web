import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulefetchComponent } from './rulefetch.component';

describe('RulefetchComponent', () => {
  let component: RulefetchComponent;
  let fixture: ComponentFixture<RulefetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulefetchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulefetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

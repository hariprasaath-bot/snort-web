import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSnortComponent } from './start-snort.component';

describe('StartSnortComponent', () => {
  let component: StartSnortComponent;
  let fixture: ComponentFixture<StartSnortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSnortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSnortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

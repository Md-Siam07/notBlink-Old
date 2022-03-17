import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackWindowComponent } from './track-window.component';

describe('TrackWindowComponent', () => {
  let component: TrackWindowComponent;
  let fixture: ComponentFixture<TrackWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

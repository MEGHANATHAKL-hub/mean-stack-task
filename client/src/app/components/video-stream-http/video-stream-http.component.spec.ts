import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStreamHttpComponent } from './video-stream-http.component';

describe('VideoStreamHttpComponent', () => {
  let component: VideoStreamHttpComponent;
  let fixture: ComponentFixture<VideoStreamHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoStreamHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoStreamHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

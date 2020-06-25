import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasLiveComponent } from './partidas-live.component';

describe('PartidasLiveComponent', () => {
  let component: PartidasLiveComponent;
  let fixture: ComponentFixture<PartidasLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidasLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesbyteamsComponent } from './matchesbyteams.component';

describe('MatchesbyteamsComponent', () => {
  let component: MatchesbyteamsComponent;
  let fixture: ComponentFixture<MatchesbyteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesbyteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesbyteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymatchesComponent } from './mymatches.component';

describe('MymatchesComponent', () => {
  let component: MymatchesComponent;
  let fixture: ComponentFixture<MymatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

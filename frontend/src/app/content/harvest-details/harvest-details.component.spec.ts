import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestDetailsComponent } from './harvest-details.component';

describe('HarvestDetailsComponent', () => {
  let component: HarvestDetailsComponent;
  let fixture: ComponentFixture<HarvestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

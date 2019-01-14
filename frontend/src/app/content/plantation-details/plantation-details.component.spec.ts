import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationDetailsComponent } from './plantation-details.component';

describe('PlantationDetailsComponent', () => {
  let component: PlantationDetailsComponent;
  let fixture: ComponentFixture<PlantationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

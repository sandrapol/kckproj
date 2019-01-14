import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationAddComponent } from './plantation-add.component';

describe('PlantationAddComponent', () => {
  let component: PlantationAddComponent;
  let fixture: ComponentFixture<PlantationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPostAddComponent } from './regular-post-add.component';

describe('RegularPostAddComponent', () => {
  let component: RegularPostAddComponent;
  let fixture: ComponentFixture<RegularPostAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularPostAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularPostAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

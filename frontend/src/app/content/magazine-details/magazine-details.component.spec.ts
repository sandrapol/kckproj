import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineDetailsComponent } from './magazine-details.component';

describe('MagazineDetailsComponent', () => {
  let component: MagazineDetailsComponent;
  let fixture: ComponentFixture<MagazineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

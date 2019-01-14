import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineAddComponent } from './magazine-add.component';

describe('MagazineAddComponent', () => {
  let component: MagazineAddComponent;
  let fixture: ComponentFixture<MagazineAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeatilsComponent } from './customer-deatils.component';

describe('CustomerDeatilsComponent', () => {
  let component: CustomerDeatilsComponent;
  let fixture: ComponentFixture<CustomerDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddPageComponent } from './order-add-page.component';

describe('OrderAddPageComponent', () => {
  let component: OrderAddPageComponent;
  let fixture: ComponentFixture<OrderAddPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderAddPageComponent]
    });
    fixture = TestBed.createComponent(OrderAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

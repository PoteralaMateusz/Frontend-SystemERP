import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddPageComponent } from './item-add-page.component';

describe('ItemAddPageComponent', () => {
  let component: ItemAddPageComponent;
  let fixture: ComponentFixture<ItemAddPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemAddPageComponent]
    });
    fixture = TestBed.createComponent(ItemAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

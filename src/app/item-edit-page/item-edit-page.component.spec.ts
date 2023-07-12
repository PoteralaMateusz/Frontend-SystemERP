import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditPageComponent } from './item-edit-page.component';

describe('ItemEditPageComponent', () => {
  let component: ItemEditPageComponent;
  let fixture: ComponentFixture<ItemEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemEditPageComponent]
    });
    fixture = TestBed.createComponent(ItemEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

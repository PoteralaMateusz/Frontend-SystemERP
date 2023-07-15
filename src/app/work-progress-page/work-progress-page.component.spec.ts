import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProgressPageComponent } from './work-progress-page.component';

describe('WorkProgressPageComponent', () => {
  let component: WorkProgressPageComponent;
  let fixture: ComponentFixture<WorkProgressPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkProgressPageComponent]
    });
    fixture = TestBed.createComponent(WorkProgressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

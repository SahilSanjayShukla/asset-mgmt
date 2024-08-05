import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutflowFormComponent } from './outflow-form.component';

describe('OutflowFormComponent', () => {
  let component: OutflowFormComponent;
  let fixture: ComponentFixture<OutflowFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutflowFormComponent]
    });
    fixture = TestBed.createComponent(OutflowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

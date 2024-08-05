import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLiabilityFormComponent } from './current-liability-form.component';

describe('CurrentLiabilityFormComponent', () => {
  let component: CurrentLiabilityFormComponent;
  let fixture: ComponentFixture<CurrentLiabilityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentLiabilityFormComponent]
    });
    fixture = TestBed.createComponent(CurrentLiabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

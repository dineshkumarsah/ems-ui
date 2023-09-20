import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdateEmployeeComponent } from './add-and-update-employee.component';

describe('AddAndUpdateEmployeeComponent', () => {
  let component: AddAndUpdateEmployeeComponent;
  let fixture: ComponentFixture<AddAndUpdateEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAndUpdateEmployeeComponent]
    });
    fixture = TestBed.createComponent(AddAndUpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

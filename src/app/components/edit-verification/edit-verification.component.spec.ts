import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVerificationComponent } from './edit-verification.component';

describe('EditVerificationComponent', () => {
  let component: EditVerificationComponent;
  let fixture: ComponentFixture<EditVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

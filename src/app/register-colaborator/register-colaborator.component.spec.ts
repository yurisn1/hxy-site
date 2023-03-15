import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterColaboratorComponent } from './register-colaborator.component';

describe('RegisterColaboratorComponent', () => {
  let component: RegisterColaboratorComponent;
  let fixture: ComponentFixture<RegisterColaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterColaboratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterColaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

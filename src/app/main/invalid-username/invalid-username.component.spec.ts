import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidUsernameComponent } from './invalid-username.component';

describe('InvalidUsernameComponent', () => {
  let component: InvalidUsernameComponent;
  let fixture: ComponentFixture<InvalidUsernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidUsernameComponent]
    });
    fixture = TestBed.createComponent(InvalidUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

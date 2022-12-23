import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidMessageComponent } from './invalid-message.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

describe('InvalidMessageComponent', () => {
  let component: InvalidMessageComponent;
  let fixture: ComponentFixture<InvalidMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvalidMessageComponent]
    }).compileComponents();
  });

  describe('Form control validations', function () {
    const formControlValid = new FormControl('err', [Validators.required]);
    const formControlInvalid = new FormControl(null, [Validators.required]);

    beforeEach(() => {
      fixture = TestBed.createComponent(InvalidMessageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should return true if has error', () => {
      jest.spyOn(component.control, 'hasError').mockReturnValue(true);
      const result = component.hasError('error');
      expect(result).toBeTruthy();
    });

    it('should return false if has no error', () => {
      jest.spyOn(component.control, 'hasError').mockReturnValue(false);
      const result = component.hasError('error');
      expect(result).toBeFalsy();
    });

    it('should invalid control displayed be true', () => {
      component.control = formControlInvalid;
      component.control.markAsTouched();

      expect(component.displayed()).toBeTruthy();
    });

    it('should valid control displayed be false', () => {
      component.control = formControlValid;
      component.control.markAsTouched();

      expect(component.displayed()).toBeFalsy();
    });
  });

  describe('Group control validations', function () {
    const formGroupInvalid = new FormBuilder().group({
      field: new FormControl(null, [Validators.required])
    });
    const formGroupValid = new FormBuilder().group({
      field: new FormControl('err', [Validators.required])
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(InvalidMessageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should invalid group displayed be true', () => {
      component.groupControl = formGroupInvalid;
      component.groupControl.markAsTouched();

      expect(component.displayed()).toBeTruthy();
    });

    it('should valid group displayed be false', () => {
      component.groupControl = formGroupValid;
      component.groupControl.markAsTouched();

      expect(component.displayed()).toBeFalsy();
    });

    it('should invalid group has error required', () => {
      component.groupControl = formGroupInvalid;
      component.groupControl.markAsTouched();

      expect(component.hasError('required')).toBeTruthy();
    });
  });
});

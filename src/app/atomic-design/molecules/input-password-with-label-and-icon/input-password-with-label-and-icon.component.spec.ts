import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputPasswordWithLabelAndIconComponent } from './input-password-with-label-and-icon.component';
import { By } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';

describe('Test InputPasswordWithLabelAndIconComponent', () => {
  let fixture: ComponentFixture<InputPasswordWithLabelAndIconComponent>;
  let component: InputPasswordWithLabelAndIconComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPasswordWithLabelAndIconComponent]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordWithLabelAndIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Test : focusInEvent()', () => {
    it('focusInEvent should call emit', () => {
      const spyEmitOnFocusIn = jest.spyOn(component.focusInInputEvent, 'emit');
      component.focusIn();
      expect(spyEmitOnFocusIn).toHaveBeenCalled();
    });
  });
  describe('Test : focusOutEvent()', () => {
    it('focusOutEvent should call emit', () => {
      const spyEmitOnFocusOut = jest.spyOn(
        component.focusOutInputEvent,
        'emit'
      );
      component.emitFocusOutInput();
      expect(spyEmitOnFocusOut).toHaveBeenCalled();
    });
  });
  describe('Test : (focusin)', () => {
    it('should call emit on focusInEvent', () => {
      const spyEmitFocusIn = jest.spyOn(component, 'emitFocusInInput');
      const spyFocusIn = jest.spyOn(component, 'focusIn');
      const input = fixture.debugElement.query(By.css('atom-input-password'));
      input.triggerEventHandler('focusInEvent', {});
      fixture.detectChanges();

      expect(spyEmitFocusIn).toHaveBeenCalled();
      expect(spyFocusIn).toHaveBeenCalled();
    });
  });
  describe('Test : (focusout)', () => {
    it('should call emit on focusOutEvent', () => {
      const spyEmitFocusOut = jest.spyOn(component, 'emitFocusOutInput');
      const spyFocusOut = jest.spyOn(component, 'focusOut');
      const input = fixture.debugElement.query(By.css('atom-input-password'));
      input.triggerEventHandler('focusOutEvent', {});
      fixture.detectChanges();

      expect(spyEmitFocusOut).toHaveBeenCalled();
      expect(spyFocusOut).toHaveBeenCalled();
    });
  });
  describe('Test : isValidOrInvalidOrNothing', () => {
    it('return focus when focus is true', () => {
      component.focus = true;
      const result = component.isValidOrInvalidOrNothing();
      fixture.detectChanges();
      expect(result).toEqual('focus');
    });
    it('return is invalid when touched + invalid and not focus', () => {
      component.focus = false;
      component.formControlInput = new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]);
      component.formControlInput.markAsTouched();

      const result = component.isValidOrInvalidOrNothing();
      expect(result).toEqual('is-invalid');
    });
    it('return is invalid when touched + valid and not focus', () => {
      component.focus = false;
      component.formControlInput = new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]);
      component.formControlInput.markAsTouched();
      component.formControlInput.setValue('aaaaaa');

      const result = component.isValidOrInvalidOrNothing();
      expect(result).toEqual('is-valid');
    });
  });
  describe('Test : ToggleFieldTextType', () => {
    it('should pass to visible icon when click and not visible ', () => {
      component.fieldTextType = false;
      component.nameIcon = 'visibility';

      component.toggleFieldTextType();

      expect(component.fieldTextType).toBeTruthy();
      expect(component.nameIcon).toEqual('visibility_off');
    });
    it('should pass to invisible icon when click and visible ', () => {
      component.fieldTextType = true;
      component.nameIcon = 'visibility_off';

      component.toggleFieldTextType();

      expect(component.fieldTextType).toBeFalsy();
      expect(component.nameIcon).toEqual('visibility');
    });
  });
});

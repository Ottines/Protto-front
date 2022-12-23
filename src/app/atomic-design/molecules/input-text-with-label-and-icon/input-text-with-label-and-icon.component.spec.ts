import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextWithLabelAndIconComponent } from './input-text-with-label-and-icon.component';
import { By } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';

describe('Test InputTextWithLabelAndIconComponent', () => {
  let fixture: ComponentFixture<InputTextWithLabelAndIconComponent>;
  let component: InputTextWithLabelAndIconComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextWithLabelAndIconComponent]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextWithLabelAndIconComponent);
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
      const input = fixture.debugElement.query(By.css('atom-input-text'));
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
      const input = fixture.debugElement.query(By.css('atom-input-text'));
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
});

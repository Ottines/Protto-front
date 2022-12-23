import { InputPasswordWithLabelComponent } from './input-password-with-label.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";

describe('Test InputPasswordWithLabelComponent', () => {
  let fixture: ComponentFixture<InputPasswordWithLabelComponent>;
  let component: InputPasswordWithLabelComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPasswordWithLabelComponent]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Test : focusInEvent()', () => {
    it('focusInEvent should call emit', () => {
      const spyEmitOnFocusIn = jest.spyOn(component.focusInInputEvent, 'emit');
      component.emitFocusInInput();
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
      const spyEmitFocusOut = jest.spyOn(component, 'emitFocusInInput');
      const input = fixture.debugElement.query(By.css('atom-input-password'));
      input.triggerEventHandler('focusInEvent', {});
      fixture.detectChanges();

      expect(spyEmitFocusOut).toHaveBeenCalled();
    });
  });
  describe('Test : (focusout)', () => {
    it('should call emit on focusOutEvent', () => {
      const spyEmitFocusOut = jest.spyOn(component, 'emitFocusOutInput');
      const input = fixture.debugElement.query(By.css('atom-input-password'));
      input.triggerEventHandler('focusOutEvent', {});
      fixture.detectChanges();

      expect(spyEmitFocusOut).toHaveBeenCalled();
    });
  });
});

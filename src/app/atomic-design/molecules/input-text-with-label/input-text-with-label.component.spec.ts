import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputTextWithLabelComponent } from './input-text-with-label.component';

describe('Test InputTextWithLabelComponent', () => {
  let fixture: ComponentFixture<InputTextWithLabelComponent>;
  let component: InputTextWithLabelComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextWithLabelComponent]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextWithLabelComponent);
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
      const spyEmitOnFocusOut = jest.spyOn(component.focusOutInputEvent, 'emit');
      component.emitFocusOutInput();
      expect(spyEmitOnFocusOut).toHaveBeenCalled();
    });
  });
  describe('Test : (focusin)', () => {
    it('should call emit on focusInEvent', () => {
      const spyEmitFocusOut = jest.spyOn(component, 'emitFocusInInput');
      const input = fixture.debugElement.query(By.css('atom-input-text'));
      input.triggerEventHandler('focusInEvent', {});
      fixture.detectChanges();

      expect(spyEmitFocusOut).toHaveBeenCalled();
    });
  });
  describe('Test : (focusout)', () => {
    it('should call emit on focusOutEvent', () => {
      const spyEmitFocusOut = jest.spyOn(component, 'emitFocusOutInput');
      const input = fixture.debugElement.query(By.css('atom-input-text'));
      input.triggerEventHandler('focusOutEvent', {});
      fixture.detectChanges();

      expect(spyEmitFocusOut).toHaveBeenCalled();
    });
  });
});

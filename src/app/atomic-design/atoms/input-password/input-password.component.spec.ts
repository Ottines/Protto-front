import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputPasswordComponent } from './input-password.component';
import { By } from '@angular/platform-browser';

describe('Test InputPasswordComponent', () => {
  let fixture: ComponentFixture<InputPasswordComponent>;
  let component: InputPasswordComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPasswordComponent]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Test : focusInEvent()', () => {
    it('focusInEvent should call emit', () => {
      const spyEmitOnFocusIn = jest.spyOn(component.focusInEvent, 'emit');
      component.emitFocusIn();
      expect(spyEmitOnFocusIn).toHaveBeenCalled();
    });
  });
  describe('Test : focusOutEvent()', () => {
    it('focusOutEvent should call emit', () => {
      const spyEmitOnFocusOut = jest.spyOn(component.focusOutEvent, 'emit');
      component.emitFocusOut();
      expect(spyEmitOnFocusOut).toHaveBeenCalled();
    });
  });
  describe('Test : (focusin)', () => {
    it('should call emit on focusInEvent', () => {
      const spyEmitFocusOut = jest.spyOn(component, 'emitFocusIn');
      const input = fixture.debugElement.query(By.css('input'));
      input.triggerEventHandler('focusin', {});
      fixture.detectChanges();

      expect(spyEmitFocusOut).toHaveBeenCalled();
    });
  });
  describe('Test : (focusout)', () => {
    it('should call emit on focusOutEvent', () => {
      const spyEmitFocusOut = jest.spyOn(component, 'emitFocusOut');
      const input = fixture.debugElement.query(By.css('input'));
      input.triggerEventHandler('focusout', {});
      fixture.detectChanges();

      expect(spyEmitFocusOut).toHaveBeenCalled();
    });
  });
});

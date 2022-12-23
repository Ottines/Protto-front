import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmailLabelComponent } from './input-email-label.component';
import { By } from '@angular/platform-browser';

describe('InputEmailLabelComponent', () => {
  let component: InputEmailLabelComponent;
  let fixture: ComponentFixture<InputEmailLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputEmailLabelComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEmailLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Focus in event', () => {
    it('should emit focus in method call', () => {
      const spy = jest.spyOn(component.eventFocusIn, 'emit');

      component.focusIn();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit focus in event', () => {
      const spy = jest.spyOn(component.eventFocusIn, 'emit');

      const input = fixture.debugElement.query(By.css('atom-input-email'));

      input.triggerEventHandler('eventFocusIn', {});
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Focus out event', () => {
    it('should emit focus out method call', () => {
      const spy = jest.spyOn(component.eventFocusOut, 'emit');

      component.focusOut();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit focus out event', () => {
      const spy = jest.spyOn(component.eventFocusOut, 'emit');

      const input = fixture.debugElement.query(By.css('atom-input-email'));

      input.triggerEventHandler('eventFocusOut', {});
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });
});

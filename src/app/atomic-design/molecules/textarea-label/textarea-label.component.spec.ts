import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaLabelComponent } from './textarea-label.component';
import { By } from '@angular/platform-browser';

describe('TextareaLabelComponent', () => {
  let component: TextareaLabelComponent;
  let fixture: ComponentFixture<TextareaLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextareaLabelComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaLabelComponent);
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

      const textarea = fixture.debugElement.query(By.css('atom-textarea'));

      textarea.triggerEventHandler('eventFocusIn', {});
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

      const textarea = fixture.debugElement.query(By.css('atom-textarea'));

      textarea.triggerEventHandler('eventFocusOut', {});
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });
});

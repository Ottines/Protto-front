import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaComponent } from './textarea.component';
import { By } from '@angular/platform-browser';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextareaComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Focus in events', () => {
    it('should emit focus in method call', () => {
      const spy = jest.spyOn(component.eventFocusIn, 'emit');

      component.focusIn();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit focus in event', () => {
      const spy = jest.spyOn(component.eventFocusIn, 'emit');
      const textarea = fixture.debugElement.query(By.css('textarea'));

      textarea.triggerEventHandler('focusin', {});
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Focus out events', () => {
    it('should emit focus out method call', () => {
      const spy = jest.spyOn(component.eventFocusIn, 'emit');

      component.focusIn();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit focus out event', () => {
      const spy = jest.spyOn(component.eventFocusIn, 'emit');
      const textarea = fixture.debugElement.query(By.css('textarea'));

      textarea.triggerEventHandler('focusin', {});
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });
});

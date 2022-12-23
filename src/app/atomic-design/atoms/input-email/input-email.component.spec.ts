import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmailComponent } from './input-email.component';
import { By } from '@angular/platform-browser';

describe('InputEmailComponent', () => {
  let component: InputEmailComponent;
  let fixture: ComponentFixture<InputEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputEmailComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Focus in event', () => {
    it('should emit focus in method call', () => {
      const spy = jest.spyOn(component.eventFocusIn, 'emit');

      component.focusIn();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit focus in event', () => {
      const spy = jest.spyOn(component.eventFocusIn, 'emit');

      const input = fixture.debugElement.query(By.css('input'));

      input.triggerEventHandler('focusin', {});
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

      const input = fixture.debugElement.query(By.css('input'));

      input.triggerEventHandler('focusout', {});
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });
});

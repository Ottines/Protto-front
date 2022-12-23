import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectComponent } from './multi-select.component';
import { By } from '@angular/platform-browser';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiSelectComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Closed event', () => {
    it('should emit focus in method call', () => {
      const spy = jest.spyOn(component.emitClosed, 'emit');

      component.closed();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit focus in event', () => {
      const spy = jest.spyOn(component.emitClosed, 'emit');

      const input = fixture.debugElement.query(By.css('mat-select'));

      input.triggerEventHandler('closed', {});

      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Closed event', () => {
    it('should default comparator return false on two different values', () => {
      const value1 = { id: 1, name: 'v1', data: '' };
      const value2 = { id: 2, name: 'v2', data: '' };

      expect(component.comparator(value1, value2)).toBeFalsy();
    });

    it('should default comparator return true on same values', () => {
      const value1 = { id: 1, name: 'v1', data: '' };

      expect(component.comparator(value1, value1)).toBeTruthy();
    });

    it('should default comparator return false on undefined value', () => {
      const value1 = { id: 1, name: 'v1', data: '' };

      expect(component.comparator(value1, undefined)).toBeFalsy();
    });
  });
});

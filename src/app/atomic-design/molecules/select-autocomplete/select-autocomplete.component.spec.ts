import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAutocompleteComponent } from './select-autocomplete.component';
import { By } from '@angular/platform-browser';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';

describe('SelectAutocompleteComponent', () => {
  let component: SelectAutocompleteComponent;
  let fixture: ComponentFixture<SelectAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectAutocompleteComponent, MatAutocomplete, MatOption]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Focus in event', () => {
    it('should emit focus in method call', () => {
      const spy = jest.spyOn(component.emitOnSelectionChange, 'emit');

      const selected = { name: 'oui', id: 1, data: '' };

      component.showOption(selected);

      expect(spy).toHaveBeenCalledWith(selected);
    });
  });

  describe('Focus change event', () => {
    it('should emit focus out method call', () => {
      const spy = jest.spyOn(component.emitChange, 'emit');

      component.formChanged();

      expect(spy).toHaveBeenCalled();
    });

    it('should emit change event', () => {
      const spy = jest.spyOn(component.emitChange, 'emit');

      const input = fixture.debugElement.query(By.css('input'));

      input.triggerEventHandler('change', {});
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });
});

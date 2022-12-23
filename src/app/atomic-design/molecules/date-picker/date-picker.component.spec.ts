import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerComponent } from './date-picker.component';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatDatepickerModule,
  MatEndDate,
  MatStartDate
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DateProvider } from '../../../providers/date/date-provider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  const groupPicker = new FormBuilder().group({
    picker: new FormControl()
  });

  const groupRange = new FormBuilder().group({
    startDate: new FormControl(),
    endDate: new FormControl()
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatePickerComponent],
      imports: [
        TranslateModule.forRoot(),
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NoopAnimationsModule
      ],
      providers: [DateProvider]
    }).compileComponents();
  });

  describe('Picker format', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(DatePickerComponent);
      component = fixture.componentInstance;
      component.groupControl = groupPicker;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    describe('Date change event', () => {
      it('should emit focus out method call', () => {
        const spy = jest.spyOn(component.dateChange, 'emit');

        component.sendDate(new Date());

        expect(spy).toHaveBeenCalled();
      });

      it('should emit focus out event', () => {
        const spy = jest.spyOn(component.dateChange, 'emit');

        const input = fixture.debugElement.query(By.css('input'));

        input.triggerEventHandler('dateChange', new Date());
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('Range format', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(DatePickerComponent);
      component = fixture.componentInstance;
      component.groupControl = groupRange;
      component.typePicker = 'range';
      fixture.detectChanges();
    });

    describe('Events emitters', function () {
      it('should emit start date change method call', () => {
        const spy = jest.spyOn(component.startDateChange, 'emit');

        component.sendStartDate(new Date());

        expect(spy).toHaveBeenCalled();
      });

      it('should emit start date change event', () => {
        const spy = jest.spyOn(component.startDateChange, 'emit');

        const input = fixture.debugElement.query(By.directive(MatStartDate));
        input.triggerEventHandler('dateChange', new Date());
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
      });

      it('should emit end date change method call', () => {
        const spy = jest.spyOn(component.endDateChange, 'emit');

        component.sendEndDate(new Date());

        expect(spy).toHaveBeenCalled();
      });

      it('should emit end date change event', () => {
        const spy = jest.spyOn(component.endDateChange, 'emit');

        const input = fixture.debugElement.query(By.directive(MatEndDate));

        input.triggerEventHandler('dateChange', new Date());
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
      });
    });

    describe('Control validations', function () {
      it('should not touched range need hint', function () {
        expect(component.needHint()).toBeTruthy();
      });

      it('should touched range dont need hint', function () {
        const groupModified = groupRange;

        groupModified.setControl('startDate', new FormControl('04/07/2022'));
        groupModified.setControl('endDate', new FormControl('06/07/2022'));
        groupModified.markAsTouched();
        component.groupControl = groupModified;
        fixture.detectChanges();

        expect(component.needHint()).toBeFalsy();
      });

      it('should initial range be not valid', function () {
        component.groupControl.markAsUntouched();
        fixture.detectChanges();

        expect(component.isValid()).toBeFalsy();
      });

      it('should range nice formed be valid', function () {
        const groupModified = groupRange;

        groupModified.setControl('startDate', new FormControl('04/07/2022'));
        groupModified.setControl('endDate', new FormControl('06/07/2022'));
        groupModified.markAsTouched();
        component.groupControl = groupModified;
        fixture.detectChanges();

        expect(component.isValid()).toBeTruthy();
      });

      it('should invalid initial range be valid', function () {
        const groupModified = groupRange;

        groupModified.setControl(
          'startDate',
          new FormControl(null, [Validators.required])
        );
        groupModified.setControl('endDate', new FormControl('06/07/2022'));
        groupModified.markAsTouched();
        component.groupControl = groupModified;
        fixture.detectChanges();

        expect(component.isValid()).toBeFalsy();
      });

      it('should initial range be not invalid', function () {
        component.groupControl.markAsUntouched();
        fixture.detectChanges();

        expect(component.isInvalid()).toBeFalsy();
      });

      it('should nice formed range be not invalid', function () {
        const groupModified = groupRange;

        groupModified.setControl(
          'startDate',
          new FormControl('04/07/2022', [Validators.required])
        );
        groupModified.setControl('endDate', new FormControl('06/07/2022'));
        groupModified.markAsTouched();
        component.groupControl = groupModified;
        fixture.detectChanges();

        expect(component.isInvalid()).toBeFalsy();
      });

      it('should misformed range be invalid', function () {
        const groupModified = groupRange;

        groupModified.setControl(
          'startDate',
          new FormControl(null, [Validators.required])
        );
        groupModified.setControl('endDate', new FormControl('06/07/2022'));
        groupModified.markAsTouched();
        component.groupControl = groupModified;
        fixture.detectChanges();

        expect(component.isInvalid()).toBeTruthy();
      });
    });
  });
});

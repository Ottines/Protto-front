import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateUtils } from '../../../utils/Date/DateUtils';
import { DateFilterFn } from '@angular/material/datepicker';
import { ErrorValidation } from '../../../model';

@Component({
  selector: 'molecule-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() class = '';
  @Input() label = 'Choix de la date';
  @Input() hint = 'JJ/MM/AAAA';
  @Input() typePicker: 'picker' | 'range' = 'picker';
  @Input() pickerDateName = 'picker';
  @Input() startDateName = 'startDate';
  @Input() endDateName = 'endDate';
  @Input() placeholder = '';
  @Input() placeHolderEnd = 'Date fin';
  @Input() placeHolderStart = 'Date début';
  @Input() groupControl: FormGroup;

  @Input() minimumDate: Date = DateUtils.getTomorrow();
  @Input() maximumDate: Date = DateUtils.datePlusMonths(DateUtils.getNow());
  @Input() filter: DateFilterFn<Date> = DateUtils.matFilterWeekEnds;
  @Input() disableInput = false;
  @Input() errorTable: ErrorValidation[] = [];

  @Output() dateChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() startDateChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() endDateChange: EventEmitter<any> = new EventEmitter<any>();

  sendDate($event) {
    this.dateChange.emit($event.value);
  }

  sendEndDate($event) {
    this.endDateChange.emit($event.value);
  }

  sendStartDate($event) {
    this.startDateChange.emit($event.value);
  }

  needHint() {
    return this.groupControl.invalid || this.groupControl.untouched;
  }

  isInvalid() {
    return this.groupControl.invalid && this.groupControl.touched;
  }

  isValid() {
    return this.groupControl.valid && this.groupControl.touched;
  }
}

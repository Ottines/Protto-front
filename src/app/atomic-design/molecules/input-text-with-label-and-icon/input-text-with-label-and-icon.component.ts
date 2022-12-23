import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorValidation } from '../../../model';

@Component({
  selector: 'molecule-input-text-with-label-and-icon',
  templateUrl: './input-text-with-label-and-icon.component.html',
  styleUrls: ['./input-text-with-label-and-icon.component.scss']
})
export class InputTextWithLabelAndIconComponent {
  @Input() config: 'inline' | 'default' = 'default';
  @Input() classMolecule = '';
  @Input() classeLabel = '';
  @Input() forLabel = '';
  @Input() valueLabel = '';
  @Input() classInput = '';
  @Input() maxLengthInput = 50;
  @Input() placeholderInput = '';
  @Input() formControlInput: FormControl = new FormControl();
  @Input() nameIcon = '';
  @Input() isTextIcon = false;
  @Input() errorTable: ErrorValidation[] = [];
  @Input() numberDigits = 2;

  @Output() focusInInputEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusOutInputEvent: EventEmitter<any> = new EventEmitter<any>();

  focus: boolean = false;

  isValidOrInvalidOrNothing() {
    if (this.focus) {
      return 'focus';
    }
    if (this.formControlInput.touched) {
      if (this.formControlInput.invalid) {
        return 'is-invalid';
      }
      if (this.formControlInput.valid) {
        return 'is-valid';
      }
    }
    return '';
  }

  focusIn() {
    this.focus = true;
    this.emitFocusInInput();
  }

  focusOut() {
    this.focus = false;
    this.emitFocusOutInput();
  }

  emitFocusInInput() {
    this.focusInInputEvent.emit();
  }

  emitFocusOutInput() {
    this.focusOutInputEvent.emit();
  }
}

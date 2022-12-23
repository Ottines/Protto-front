import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorValidation } from '../../../model';

@Component({
  selector: 'molecule-input-password-with-label-and-icon',
  templateUrl: './input-password-with-label-and-icon.component.html',
  styleUrls: ['./input-password-with-label-and-icon.component.scss']
})
export class InputPasswordWithLabelAndIconComponent {
  @Input() config: 'inline' | 'default' = 'default';
  @Input() classMolecule = '';
  @Input() classeLabel = '';
  @Input() forLabel = '';
  @Input() valueLabel = '';
  @Input() idInput = '';
  @Input() classInput = '';
  @Input() maxLengthInput = 50;
  @Input() placeholderInput = '';
  @Input() formControlInput: FormControl = new FormControl();
  @Input() errorTable: ErrorValidation[] = [];

  @Output() focusInInputEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusOutInputEvent: EventEmitter<any> = new EventEmitter<any>();

  focus = false;
  fieldTextType = false;
  nameIcon = 'visibility';

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

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
    if (this.nameIcon === 'visibility') {
      this.nameIcon = 'visibility_off';
    } else {
      this.nameIcon = 'visibility';
    }
  }
}

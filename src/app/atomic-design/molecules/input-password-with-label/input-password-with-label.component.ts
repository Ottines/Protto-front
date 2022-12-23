import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorValidation } from '../../../model';

@Component({
  selector: 'molecule-input-password-with-label',
  templateUrl: './input-password-with-label.component.html',
  styleUrls: ['./input-password-with-label.component.scss']
})
export class InputPasswordWithLabelComponent {
  @Input() config: 'inline' | 'default' = 'default';
  @Input() classMolecule: string = '';
  @Input() classeLabel: string = '';
  @Input() forLabel: string = '';
  @Input() valueLabel: string = '';
  @Input() idInput: string = '';
  @Input() classInput: string = '';
  @Input() maxLengthInput: number = 50;
  @Input() placeholderInput: string = '';
  @Input() formControlInput: FormControl = new FormControl();
  @Input() errorTable: ErrorValidation[];

  @Output() focusInInputEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusOutInputEvent: EventEmitter<any> = new EventEmitter<any>();

  emitFocusInInput() {
    this.focusInInputEvent.emit();
  }

  emitFocusOutInput() {
    this.focusOutInputEvent.emit();
  }
}

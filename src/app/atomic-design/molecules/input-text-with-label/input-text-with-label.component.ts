import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorValidation } from '../../../model';

@Component({
  selector: 'molecule-input-text-with-label',
  templateUrl: './input-text-with-label.component.html',
  styleUrls: ['./input-text-with-label.component.scss']
})
export class InputTextWithLabelComponent {
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
  @Input() errorTableInput: ErrorValidation[] = [];
  @Input() numberDigits: number = 2;

  @Output() focusInInputEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusOutInputEvent: EventEmitter<any> = new EventEmitter<any>();

  emitFocusInInput() {
    this.focusInInputEvent.emit();
  }

  emitFocusOutInput() {
    this.focusOutInputEvent.emit();
  }
}

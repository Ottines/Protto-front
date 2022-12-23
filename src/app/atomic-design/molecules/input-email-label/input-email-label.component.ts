import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorValidation } from '../../../model';

@Component({
  selector: 'molecule-input-email-label',
  templateUrl: './input-email-label.component.html',
  styleUrls: ['./input-email-label.component.scss']
})
export class InputEmailLabelComponent {
  @Input() classLabel = '';
  @Input() valueLabel = '';

  @Input() config: 'inline' | 'default' = 'default';
  @Input() classMolecule = '';
  @Input() errorTable: ErrorValidation[] = [];

  @Input() controlName = '';
  @Input() placeholder = '';
  @Input() control = new FormControl();
  @Input() classInput = '';
  @Input() maxlength = 50;
  @Input() idInput = '';

  @Output() eventFocusIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventFocusOut: EventEmitter<void> = new EventEmitter<void>();

  focusIn() {
    this.eventFocusIn.emit();
  }

  focusOut() {
    this.eventFocusOut.emit();
  }
}

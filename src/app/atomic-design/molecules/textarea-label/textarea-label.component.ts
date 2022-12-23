import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorValidation } from '../../../model';

@Component({
  selector: 'molecule-textarea-label',
  templateUrl: './textarea-label.component.html',
  styleUrls: ['./textarea-label.component.scss']
})
export class TextareaLabelComponent {
  @Input() classLabel = '';
  @Input() valueLabel = '';

  @Input() classMolecule = '';
  @Input() errorTable: ErrorValidation[] = [];

  @Input() idTextarea = '';
  @Input() classTextarea = '';
  @Input() control: FormControl = new FormControl();
  @Input() controlName = '';
  @Input() placeholder = '';
  @Input() maxlength = 250;
  @Input() disabledTextarea = false;

  @Output() eventFocusIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventFocusOut: EventEmitter<void> = new EventEmitter<void>();

  focusIn() {
    this.eventFocusIn.emit();
  }

  focusOut() {
    this.eventFocusOut.emit();
  }
}

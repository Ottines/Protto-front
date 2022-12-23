import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorValidation } from '../../../model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'molecule-input-email-label-icone',
  templateUrl: './input-email-label-icone.component.html',
  styleUrls: ['./input-email-label-icone.component.scss']
})
export class InputEmailLabelIconeComponent {
  @Input() classLabel = '';
  @Input() valueLabel = '';

  @Input() config: 'inline' | 'default' = 'default';
  @Input() classMolecule = '';
  @Input() controlName = '';
  @Input() errorTable: ErrorValidation[] = [];

  @Input() idInput = '';
  @Input() placeholder = '';
  @Input() control = new FormControl();
  @Input() classInput = '';
  @Input() maxlength = 50;
  @Input() icone = 'mail';
  @Input() colorIcon = 'black';

  @Output() eventFocusIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventFocusOut: EventEmitter<void> = new EventEmitter<void>();

  focusIn() {
    this.eventFocusIn.emit();
  }

  focusOut() {
    this.eventFocusOut.emit();
  }
}

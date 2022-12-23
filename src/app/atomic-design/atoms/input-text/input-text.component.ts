import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UtilValidation } from '../../../utils/UtilValidation';

@Component({
  selector: 'atom-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() id = '';
  @Input() class = '';
  @Input() value = '';
  @Input() name = '';
  @Input() control: FormControl = new FormControl();
  @Input() placeholder = '';
  @Input() maxLength = 50;
  @Input() numberOfDigits = 2;

  @Output() focusInEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusOutEvent: EventEmitter<any> = new EventEmitter<any>();

  emitFocusIn() {
    this.focusInEvent.emit();
  }

  emitFocusOut() {
    UtilValidation.prettifyNumber(this.control, this.numberOfDigits);
    this.focusOutEvent.emit();
  }
}

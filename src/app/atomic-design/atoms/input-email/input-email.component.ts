import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent {
  @Input() id = '';
  @Input() class = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() maxlength = 50;
  @Input() control: FormControl = new FormControl();
  @Input() name = '';

  @Output() eventFocusIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventFocusOut: EventEmitter<void> = new EventEmitter<void>();

  focusIn() {
    this.eventFocusIn.emit();
  }

  focusOut() {
    this.eventFocusOut.emit();
  }
}

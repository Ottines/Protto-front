import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Input() id = '';
  @Input() controlName = '';
  @Input() class = '';
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() maxlength = 250;
  @Input() control: FormControl = new FormControl();

  @Output() eventFocusIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventFocusOut: EventEmitter<void> = new EventEmitter<void>();

  focusIn() {
    this.eventFocusIn.emit();
  }

  focusOut() {
    this.eventFocusOut.emit();
  }
}

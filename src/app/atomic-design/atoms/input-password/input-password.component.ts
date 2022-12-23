import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
  @Input() id: string = '';
  @Input() class: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() placeholder: string = '';
  @Input() maxLength: number = 50;

  @Output() focusInEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusOutEvent: EventEmitter<any> = new EventEmitter<any>();

  emitFocusIn() {
    this.focusInEvent.emit();
  }

  emitFocusOut() {
    this.focusOutEvent.emit();
  }
}

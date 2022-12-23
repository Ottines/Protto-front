import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() id = '';
  @Input() class = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
  @Input() nameButton: string = '';

  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  click() {
    this.clickEmitter.emit();
  }
}

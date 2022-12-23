import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'molecule-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss']
})
export class ButtonWithIconComponent {
  @Input() id = '';
  @Input() class = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
  @Input() nameButton: string = '';
  @Input() nameIcon: string = '';

  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  click() {
    this.clickEmitter.emit();
  }
}

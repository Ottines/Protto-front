import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() class = '';
  @Input() isText: boolean = false;
  @Output() emitClick: EventEmitter<void> = new EventEmitter<void>();

  emit() {
    this.emitClick.emit();
  }
}

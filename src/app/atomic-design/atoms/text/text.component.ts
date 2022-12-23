import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() id = '';
  @Input() class = '';
}

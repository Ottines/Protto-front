import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() class = '';
  @Input() for = '';
  @Input() value = '';
}

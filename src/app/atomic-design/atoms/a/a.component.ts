import {Component, Input} from '@angular/core';

@Component({
  selector: 'atom-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent {
  @Input() class = '';
  @Input() link = undefined;
  @Input() id = '';
}

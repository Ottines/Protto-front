import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() taille = 1;
  @Input() idTitle = '';
  @Input() classTitle = '';
}

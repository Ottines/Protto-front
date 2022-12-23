import { Component, Input, ViewChild } from '@angular/core';
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'atom-mat-tab',
  templateUrl: './mat-tab.component.html',
  styleUrls: ['./mat-tab.component.scss']
})
export class MatTabComponent {
  @Input() label: string = '';
  @Input() notif: string = '';

  @ViewChild(MatTab)
  public matTab: MatTab;
}

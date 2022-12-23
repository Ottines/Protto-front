import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent {
  @Input() action: boolean = false;
  @Input() column;

  isListNeeded(row: any) {
    return typeof row !== 'string' && typeof row !== 'number';
  }

  isAction() {
    return this.action;
  }
}

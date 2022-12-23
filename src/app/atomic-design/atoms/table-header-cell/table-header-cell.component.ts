import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'atom-table-header-cell',
  templateUrl: './table-header-cell.component.html',
  styleUrls: ['./table-header-cell.component.scss']
})
export class TableHeaderCellComponent {
  @Input() headerName: string = '';
  @Input() headerId: string = '';
}

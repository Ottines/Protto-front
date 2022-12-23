import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActionButton, TableRow } from '../../../utils/Interfaces/Interfaces';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'molecule-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource:
    | MatTableDataSource<any>
    | MatTableDataSource<TableRow<any>>;
  @Input() displayedColumn: string[] = [];
  @Input() displayedColumnName: string[] = [];
  @Input() action1: ActionButton = undefined;
  @Input() action2: ActionButton = undefined;
  @Input() action3: ActionButton = undefined;
  @Input() elementsPerPage: number;
  @Input() indexPage: number;
  @Input() totalElements: number;
  @Input() tableName = '';
  @Input() btnAjouter = false;
  @Input() nomAjouter = 'Ajouter';
  @Input() routeAjouter = '';
  @Input() pagination = true;
  @Input() class = '';

  @Output() action1Event: EventEmitter<any> = new EventEmitter<any>();
  @Output() action2Event: EventEmitter<any> = new EventEmitter<any>();
  @Output() action3Event: EventEmitter<any> = new EventEmitter<any>();
  @Output() getPageEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatTable) matTable: MatTable<any>;

  displayedColumnWithButton: string[] = [];

  ngOnInit() {
    this.displayedColumnWithButton = Array.from(this.displayedColumn);
    if (this.action1 || this.action2 || this.action3) {
      this.displayedColumnWithButton.push('action');
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.matSort;
  }

  emitAction1(row) {
    if (row.row) {
      this.action1Event.emit(row.row);
    } else {
      this.action1Event.emit(row);
    }
  }

  emitAction2(row) {
    if (row.row) {
      this.action2Event.emit(row.row);
    } else {
      this.action2Event.emit(row);
    }
  }

  emitAction3(row) {
    if (row.row) {
      this.action3Event.emit(row.row);
    } else {
      this.action3Event.emit(row);
    }
  }

  getPage(pageIndex: number, pageSize: number) {
    this.getPageEvent.emit({ pageIndex: pageIndex, pageSize: pageSize });
  }

  sortPage($event: Sort) {
    this.sortEvent.emit({ sort: $event });
  }

  buttonDisable(number: number, disableAction: string) {
    if (!disableAction) {
      return false;
    }

    return disableAction.includes(number.toString());
  }

  parseButtonParam(param, state: number) {
    if (!param.includes(';')) {
      return param;
    }

    if (state === undefined) {
      state = 0;
    }

    return param.split(';')[state];
  }

  getRowCell(row: any, colId) {
    if (row.row) {
      return row.row[colId];
    }

    return row[colId];
  }
}

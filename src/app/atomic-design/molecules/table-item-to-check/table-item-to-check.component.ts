import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { projetItem } from '../../../utils/Interfaces/Interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'molecule-table-item-to-check',
  templateUrl: './table-item-to-check.component.html',
  styleUrls: ['./table-item-to-check.component.scss']
})
export class TableItemToCheckComponent implements OnChanges {
  @Input() classMolecule = '';
  @Input() valueLabel = '';
  @Input() listOfCheckedItems: Array<projetItem> = [];
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<projetItem>;

  @Output() emitClickCheckbox: EventEmitter<any> = new EventEmitter<any>();

  selection = new SelectionModel<projetItem>(true, this.listOfCheckedItems);

  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource.data.forEach((row) => {
        if (this.listOfCheckedItems.some((item) => item.id === row.id)) {
          this.selection.select(row);
        } else {
          this.selection.deselect(row);
        }
      });
    }
  }

  changeStateCheckBox($event) {
    this.emitClickCheckbox.emit($event);
  }
}

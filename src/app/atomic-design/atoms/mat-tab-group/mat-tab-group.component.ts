import {
  AfterViewInit,
  Component,
  ContentChildren, EventEmitter,
  Input, Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatTabComponent } from '../mat-tab/mat-tab.component';

@Component({
  selector: 'atom-mat-tab-group',
  templateUrl: './mat-tab-group.component.html',
  styleUrls: ['./mat-tab-group.component.scss']
})
export class MatTabGroupComponent implements AfterViewInit {
  @Input() class = '';

  @Output() tabChangeEmitter: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatTabGroup)
  tabGroup: MatTabGroup;

  @ContentChildren(MatTabComponent)
  tabs: QueryList<MatTabComponent>;

  public ngAfterViewInit() {
    const matTabsFromQueryList = this.tabs.map((tab) => tab.matTab);
    const list = new QueryList<MatTab>();
    list.reset([matTabsFromQueryList]);
    this.tabGroup._allTabs = list;
    this.tabGroup.ngAfterContentInit();
  }

  tabChanged($event) {
    this.tabChangeEmitter.emit($event);
  }
}

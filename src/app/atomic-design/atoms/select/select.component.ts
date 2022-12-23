import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {selectItem} from "../../../utils/Interfaces/Interfaces";

@Component({
  selector: 'atom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() class = '';
  @Input() list: selectItem[] = [];
  @Input() title: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';

  @Output() emitSelectedId: EventEmitter<any> = new EventEmitter<any>();

  setIdSelected(selected: any) {
    this.emitSelectedId.emit(selected);
  }
}

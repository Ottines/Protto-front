import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectChoice } from '../../../utils/Interfaces/Interfaces';
import { Comparators } from '../../../utils/Comparators/Comparators';

@Component({
  selector: 'molecule-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() valueLabel = '';
  @Input() classLabel = '';
  @Input() controlName = '';

  @Input() control: FormControl = new FormControl();
  @Input() choices: SelectChoice[] = [];
  @Input() classMolecule = '';
  @Input() placeholder = 'Selectionnez une ou plusieurs valeur(s)...';
  @Input() comparator: (val1: SelectChoice, val2: SelectChoice) => boolean =
    Comparators.selectChoiceDefaultComparator;

  @Output() emitClosed: EventEmitter<SelectChoice[]> = new EventEmitter<
    SelectChoice[]
  >();

  closed() {
    this.emitClosed.emit(this.control.value);
  }
}

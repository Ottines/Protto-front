import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorValidation } from '../../../model';
import { SelectChoice } from '../../../utils/Interfaces/Interfaces';
import { debounceTime, map, Observable, startWith } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Filters } from '../../../utils/Filters';

@Component({
  selector: 'molecule-select-autocomplete',
  templateUrl: './select-autocomplete.component.html',
  styleUrls: ['./select-autocomplete.component.scss']
})
export class SelectAutocompleteComponent implements OnInit {
  @Input() classMolecule = '';
  @Input() valueLabel = '';
  @Input() placeholder = 'Recherchez...';
  @Input() control: FormControl = new FormControl();
  @Input() options: SelectChoice[] = [];
  @Input() filteredOptions: Observable<SelectChoice[]>;
  @Input() errorTable: ErrorValidation[] = [];
  @Input() filter: (
    typedValue: string,
    options: SelectChoice[]
  ) => SelectChoice[] = Filters.selectChoiceFilter;

  @Output() emitOnSelectionChange: EventEmitter<SelectChoice> =
    new EventEmitter();
  @Output() emitChange: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      debounceTime(environment.debounceTime),
      map((typedValue) =>
        (this.filter(typedValue, this.options) || this.options).slice(
          0,
          environment.maxElements
        )
      )
    );
  }

  formChanged() {
    this.emitChange.emit();
  }

  showOption(option: SelectChoice) {
    this.emitOnSelectionChange.emit(option);
  }

  hasError(errorCode: string) {
    return this.control.hasError(errorCode);
  }
}

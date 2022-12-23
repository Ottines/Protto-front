import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellComponent } from './table-cell.component';

describe('TableCellComponent', () => {
  let component: TableCellComponent;
  let fixture: ComponentFixture<TableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCellComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('List needed ', () => {
    it('should string not be considered as array', () => {
      const valueString = 'toPrint';

      expect(component.isListNeeded(valueString)).toBeFalsy();
    });

    it('should string not be considered as array', () => {
      const valueNumber = 14;

      expect(component.isListNeeded(valueNumber)).toBeFalsy();
    });

    it('should array considered as array', () => {
      const valuesNumber: number[] = [1, 2, 3, 4];

      expect(component.isListNeeded(valuesNumber)).toBeTruthy();
    });
  });
});

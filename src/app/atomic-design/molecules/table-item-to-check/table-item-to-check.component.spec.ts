import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemToCheckComponent } from './table-item-to-check.component';
import { projetItem } from '../../../utils/Interfaces/Interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('TableItemToCheckComponent', () => {
  let component: TableItemToCheckComponent;
  let fixture: ComponentFixture<TableItemToCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableItemToCheckComponent],
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemToCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Test : changeStateCheckBox()', () => {
    it('emitClickCheckbox should call emit', () => {
      const spyEmit = jest.spyOn(component.emitClickCheckbox, 'emit');
      component.changeStateCheckBox({});
      expect(spyEmit).toHaveBeenCalled();
    });
  });

  describe('Test : ngOnChange', () => {
    it('items of listOfCheckedItems should be checked', () => {
      const listOfAllItems: Array<projetItem> = [
        {
          id: 1,
          name: 'projet 1'
        },
        {
          id: 2,
          name: 'projet 2'
        }
      ];
      component.listOfCheckedItems = [
        {
          id: 1,
          name: 'projet 1'
        }
      ];
      component.dataSource = new MatTableDataSource(listOfAllItems);
      component.ngOnChanges();
      expect(
        component.selection.isSelected({
          id: 2,
          name: 'projet 2'
        })
      ).toBeFalsy();
      expect(component.selection.selected.length).toEqual(1);
    });
  });
});

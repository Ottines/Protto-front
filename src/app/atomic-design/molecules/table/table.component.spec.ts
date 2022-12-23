import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { TableCellComponent } from '../../atoms/table-cell/table-cell.component';
import { ButtonWithIconComponent } from '../button-with-icon/button-with-icon.component';
import { MatSortModule, Sort } from '@angular/material/sort';
import { TableRow } from '../../../utils/Interfaces/Interfaces';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  const baseData: TableRow<any>[] = [
    {
      row: {
        id: 1,
        name: 'fil de leau'
      }
    },
    { row: { id: 2, name: 'fil de soie' } }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        TranslatePipe,
        TableCellComponent,
        ButtonWithIconComponent
      ],
      imports: [TranslateModule.forRoot(), MatTableModule, MatSortModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.displayedColumn = ['id', 'name'];
    component.dataSource = new MatTableDataSource<any>(baseData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('NgOnInit ', () => {
    it('should init correctly without actions', () => {
      component.ngOnInit();

      expect(
        component.displayedColumnWithButton.some((col) => col === 'action')
      ).toBeFalsy();
    });

    it('should init correctly with actions', () => {
      component.action1 = { name: 'btn1', color: '', displayName: 'Ajout' };
      component.ngOnInit();

      expect(
        component.displayedColumnWithButton.some((col) => col === 'action')
      ).toBeTruthy();
    });
  });

  describe('NgAfterViewInit', () => {
    it('should correctly after view init  ', () => {
      const data = [{ name: 'DAtA' }];

      component.dataSource = new MatTableDataSource<any>(data);
      component.ngOnInit();
      component.ngAfterViewInit();

      fixture.detectChanges();

      expect(component.dataSource.sort).toBeTruthy();
    });
  });

  describe('Actions events', () => {
    it('should emit click action1 method call', () => {
      const spy = jest.spyOn(component.action1Event, 'emit');

      component.emitAction1({
        id: 1,
        data: { name: 'fil', description: '.........' }
      });

      expect(spy).toHaveBeenCalled();
    });

    it('should emit click action2 method call', () => {
      const spy = jest.spyOn(component.action2Event, 'emit');

      component.emitAction2({
        id: 1,
        data: { name: 'fil', description: '.........' }
      });

      expect(spy).toHaveBeenCalled();
    });

    it('should emit click action3 method call', () => {
      const spy = jest.spyOn(component.action3Event, 'emit');

      component.emitAction3({
        id: 1,
        data: { name: 'fil', description: '.........' }
      });

      expect(spy).toHaveBeenCalled();
    });

    it('should emit click event action 1', fakeAsync(async () => {
      const spy = jest.spyOn(component.action1Event, 'emit');

      component.action1 = { name: 'btn1', color: '', displayName: 'Ajout' };
      component.ngOnInit();

      fixture.detectChanges();

      const input = fixture.debugElement.query(
        By.css('molecule-button-with-icon')
      );

      input.triggerEventHandler('click', {});
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    }));

    it('should emit click event action 2', () => {
      const spy = jest.spyOn(component.action2Event, 'emit');

      component.action2 = { name: 'btn2', color: '', displayName: 'Ajout' };
      component.ngOnInit();

      fixture.detectChanges();

      const input = fixture.debugElement.query(
        By.css('molecule-button-with-icon')
      );

      input.triggerEventHandler('click', {});
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });

    it('should emit click event action 3', () => {
      const spy = jest.spyOn(component.action3Event, 'emit');

      component.action3 = { name: 'btn3', color: '', displayName: 'Ajout' };
      component.ngOnInit();

      fixture.detectChanges();

      const input = fixture.debugElement.query(
        By.css('molecule-button-with-icon')
      );

      input.triggerEventHandler('click', {});
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Get page event', () => {
    it('should emit get page method call', () => {
      const spy = jest.spyOn(component.getPageEvent, 'emit');

      component.getPage(0, 10);

      expect(spy).toHaveBeenCalled();
    });

    it('should emit get page event', () => {
      const spy = jest.spyOn(component.getPageEvent, 'emit');
      const pageEvent = { pageIndex: 0, pageSize: 10 };
      component.ngOnInit();

      fixture.detectChanges();

      const input = fixture.debugElement.query(By.css('mat-paginator'));

      input.triggerEventHandler('page', pageEvent);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith(pageEvent);
    });
  });

  describe('Sort page event', () => {
    it('should emit sort page method call', () => {
      const spy = jest.spyOn(component.sortEvent, 'emit');
      const sortEvent: Sort = { active: 'name', direction: 'asc' };

      component.sortPage(sortEvent);

      expect(spy).toHaveBeenCalledWith({ sort: sortEvent });
    });

    it('should emit sort page event', () => {
      const spy = jest.spyOn(component.sortEvent, 'emit');
      const sortEvent: Sort = { active: 'name', direction: 'asc' };

      component.ngOnInit();
      fixture.detectChanges();

      const input = fixture.debugElement.query(By.css('mat-table'));

      input.triggerEventHandler('matSortChange', sortEvent);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledWith({ sort: sortEvent });
    });
  });

  describe('Parse param button', () => {
    it('should no param button return same value', () => {
      const finalName = component.parseButtonParam('editer', undefined);

      expect(finalName).toEqual('editer');
    });

    it('should with param button return first value', () => {
      const finalName = component.parseButtonParam('editer;creer', 1);

      expect(finalName).toEqual('creer');
    });

    it('should with param button but empty state return first value', () => {
      const finalName = component.parseButtonParam('editer;creer', undefined);

      expect(finalName).toEqual('editer');
    });
  });

  describe('Get cell value', () => {
    it('should any data return the value', () => {
      const columnValue = component.getRowCell({ id: 4, name: 'val' }, 'id');

      expect(columnValue).toEqual(4);
    });

    it('should data typed with TableRow return the value asked', () => {
      const columnValue = component.getRowCell(
        { row: { id: 4, name: 'val' } },
        'name'
      );

      expect(columnValue).toEqual('val');
    });
  });
});

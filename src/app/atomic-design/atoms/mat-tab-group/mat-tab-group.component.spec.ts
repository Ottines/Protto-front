import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatTabGroupComponent } from './mat-tab-group.component';
import {QueryList} from "@angular/core";

describe('MatTabGroupComponent', () => {
  let component: MatTabGroupComponent;
  let fixture: ComponentFixture<MatTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatTabGroupComponent, MatTab, MatTabGroup]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Test : ngAfterViewInit', () => {
    const spyNgAfterContentInit = jest.spyOn(
      component.tabGroup,
      'ngAfterContentInit'
    );
    const previousAllTabs = component.tabGroup._allTabs;
    component.ngAfterViewInit();
    expect(previousAllTabs === component.tabGroup._allTabs).toBeFalsy();
    expect(component.tabGroup._allTabs).toBeDefined();
    expect(spyNgAfterContentInit).toHaveBeenCalled();
  });
});

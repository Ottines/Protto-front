import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit focus in event', () => {
    const spy = jest.spyOn(component, 'click');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('click() should emit', () => {
    const spy = jest.spyOn(component.clickEmitter, 'emit');
    component.click();
    expect(spy).toHaveBeenCalled();
  });
});

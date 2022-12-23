import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonWithIconComponent } from './button-with-icon.component';
import { By } from '@angular/platform-browser';

describe('ButtonWithIconComponent', () => {
  let component: ButtonWithIconComponent;
  let fixture: ComponentFixture<ButtonWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonWithIconComponent]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit click in event', () => {
    const spy = jest.spyOn(component, 'click');
    const button = fixture.debugElement.query(By.css('atom-button'));
    button.triggerEventHandler('clickEmitter', {});
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('click() should emit', () => {
    const spy = jest.spyOn(component.clickEmitter, 'emit');
    component.click();
    expect(spy).toHaveBeenCalled();
  });
});

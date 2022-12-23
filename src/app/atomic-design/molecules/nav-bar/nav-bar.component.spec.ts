import { TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;

  let authService: any;
  let router: any;
  let navigationService: any;
  let elementRef: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    authService = {
      getLoggedUsername: jest.fn().mockReturnValue('kadnot'),
      isLoggedIn: jest.fn().mockReturnValue(true)
    };

    router = {
      navigateByUrl: jest.fn(),
      getCurrentNavigation: jest.fn().mockReturnValue(null),
      navigate: jest.fn()
    };

    navigationService = {
      saveHistory: jest.fn(),
      resetNavigation: jest.fn()
    };

    elementRef = {
      nativeElement: {
        ownerDocument: {
          body: {
            className: jest.fn()
          }
        }
      }
    };

    component = new NavBarComponent(
      authService,
      router,
      navigationService,
      elementRef
    );
  });

  describe('Load theme', () => {
    it('should default theme be light theme', () => {
      component.loadTheme();
      expect(component.actualTheme).toBe(component.LIGHT_THEME);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { NavigationService } from '../../../services/navigation-service/navigation.service';
import { Router } from '@angular/router';
import {
  MatSlideToggle,
  MatSlideToggleChange
} from '@angular/material/slide-toggle';

@Component({
  selector: 'molecule-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() listButton: any[] = [];
  @Input() listDropdown: any[] = [];
  @Input() dropdownUser: any;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly navigationService: NavigationService,
    private elementRef: ElementRef
  ) {}

  dropdownLanguage = [
    { name: 'Français', lang: 'fr', flag: 'fr' },
    { name: 'English', lang: 'en', flag: 'gb' }
  ];

  lang;
  langToDisplay;
  actualTheme;
  private readonly KEY_THEME = 'theme';
  private readonly KEY_LANG = 'lang';
  readonly LIGHT_THEME = 'lightTheme';
  readonly DARK_THEME = 'darkTheme';
  readonly ACCESSIBLE_THEME = 'accessibleTheme';

  @ViewChild('lightTheme') lightThemeToggle: MatSlideToggle;
  @ViewChild('darkTheme') darkThemeToggle: MatSlideToggle;
  @ViewChild('accessibleTheme') accessibleThemeToggle: MatSlideToggle;

  ngOnInit(): void {
    this.lang = localStorage.getItem(this.KEY_LANG) || 'fr';
    if (this.lang === 'fr') {
      this.langToDisplay = { name: 'Français', flag: 'fr' };
    }
    if (this.lang === 'en') {
      this.langToDisplay = { name: 'English', flag: 'gb' };
    }

    this.loadTheme();
    this.navigationService.saveHistory();
    this.navigationService.resetNavigation();
  }

  getRole() {
    if (this.authService.isLoggedIn()) {
      return this.authService.getRoles()[0];
    }
  }

  changeLang(lang) {
    localStorage.setItem(this.KEY_LANG, lang);
    window.location.reload();
  }

  loadTheme() {
    const theme = localStorage.getItem(this.KEY_THEME);

    switch (theme) {
      case this.DARK_THEME: {
        this.actualTheme = this.DARK_THEME;
        break;
      }
      case this.ACCESSIBLE_THEME: {
        this.actualTheme = this.ACCESSIBLE_THEME;
        break;
      }
      case this.LIGHT_THEME:
      default: {
        this.actualTheme = this.LIGHT_THEME;
      }
    }
    this.setBodyColor();
  }

  uncheckOtherSlides($event: MatSlideToggleChange) {
    if ($event.source.name === this.actualTheme) {
      $event.source.checked = true;
      return;
    }

    this.actualTheme = $event.source.name;

    if ($event.source.name === this.LIGHT_THEME) {
      this.darkThemeToggle.checked = false;
      this.accessibleThemeToggle.checked = false;
    }

    if ($event.source.name === this.DARK_THEME) {
      this.lightThemeToggle.checked = false;
      this.accessibleThemeToggle.checked = false;
    }

    if ($event.source.name === this.ACCESSIBLE_THEME) {
      this.darkThemeToggle.checked = false;
      this.lightThemeToggle.checked = false;
    }
  }

  slideAreInit() {
    return (
      this.lightThemeToggle != undefined &&
      this.darkThemeToggle != undefined &&
      this.accessibleThemeToggle != undefined
    );
  }

  changeTheme($event: MatSlideToggleChange) {
    localStorage.setItem(this.KEY_THEME, $event.source.name);
    this.uncheckOtherSlides($event);
    this.setBodyColor();
  }

  setBodyColor() {
    if (this.actualTheme !== undefined) {
      this.elementRef.nativeElement.ownerDocument.body.className =
        this.actualTheme;
    } else {
      this.elementRef.nativeElement.ownerDocument.body.className = 'lightTheme';
    }
  }

  deconnexion() {
    this.authService.deconnexion();
    this.loadTheme();
  }

  getUsername() {
    return this.authService.getLoggedUsername().split('@')[0];
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  hasPreviousRoute() {
    return this.navigationService.hasPreviousRoute();
  }

  hasNextRoute() {
    return this.navigationService.hasNextRoute();
  }

  back(): void {
    this.navigationService.back();
  }

  forward() {
    this.navigationService.forward();
  }

  getNextRoute() {
    return this.navigationService.getNextRoute();
  }

  getPreviousRoute() {
    return this.navigationService.getPreviousRoute();
  }

  sameTheme(theme: string) {
    return theme === this.actualTheme;
  }

  routerLink(href: string) {
    this.router.navigateByUrl(href);
  }
}

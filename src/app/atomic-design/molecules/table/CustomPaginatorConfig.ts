import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

export class PaginatorIntlService extends MatPaginatorIntl {
  translate: TranslateService;

  injectTranslateService(translate: TranslateService) {
    this.translate = translate;

    this.translate.onLangChange.subscribe(() => {
      this.translateLabels();
    });

    this.translateLabels();
  }

  translateLabels() {
    super.itemsPerPageLabel = this.translate.instant('Elements par page');
    super.nextPageLabel = this.translate.instant('Page suivante');
    super.previousPageLabel = this.translate.instant('Page précédente');
    super.lastPageLabel = this.translate.instant('Dernière page');
    super.firstPageLabel = this.translate.instant('Première page');
    this.changes.next();
  }
}
